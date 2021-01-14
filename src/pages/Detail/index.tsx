import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Linking, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';
import Header from '../../components/Header';

import {
  Container,
  ImagesContainer,
  ScrollImage,
  ImageBack,
  InfoPet,
  PetName,
  PetDescription,
  InfoAdot,
  InfoAdotTitle,
  InfoAdotDescription,
  ContactsContainer,
  ContactWhats,
  ContactMail,
  ContactWhatsTitle,
  ContactEmailTitle,
  PetDetail
} from './styles';
import { ScrollView, } from 'react-native-gesture-handler';

interface IPetDetailProps {
  id: string;
}

interface IPetDetail {
  id: number;
  name: string;
  age: number;
  breed: string;
  description: string;
  whatsapp: string;
  email: string;
  path: string;
  photos: Array<{
    id: number;
    path: string;
  }>;
}

const Detail: React.FC = () => {
  const [petDetail, setPetDetail] = useState<IPetDetail>({} as IPetDetail);
  const [loading, setLoading] = useState(false);

  const route = useRoute();

  useEffect(() => {
    async function loadPetDetail() {
      setLoading(true);

      const params = route.params as IPetDetailProps;

      const response = await api.get(`/recomended/${params.id}`)
      setPetDetail(response.data)

      setLoading(false);
    }

    loadPetDetail();
  }, [])

  const handleMessageWhats = useCallback((pet:IPetDetail) => {
    const text = `Olá, tenho interesse em adotar o ${pet.name}, gostária de obter mais informações a respeito da adoção.`
    Linking.openURL(`whatsapp://send?text=${text}&phone=${pet.whatsapp}`)
  }, [])

  const handleMessageMail = useCallback((pet:IPetDetail)=>{
    const body = `Olá, tenho interesse em adotar o ${pet.name}, gostária de obter mais informações a respeito da adoção.`
    const subject = `Adoção do ${pet.name}`;
    Linking.openURL(`mailto:${pet.email}?subject=${subject}&body=${body}`)
  },[])


  if (loading) {
    return (
      <>
        <Container style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Text style={{ fontFamily:'Roboto_700Bold', fontSize:17 }}>CARREGANDO</Text>
        </Container>
      </>
    )
  }

  return (
    <Container>
      <Header
        title="Detalhe do pet"
      />

      <ScrollView>
        <ImagesContainer>
          <ScrollImage horizontal pagingEnabled>
            {petDetail.photos?.map(item => (
              <ImageBack key={item.id} source={{ uri: item.path }} style={{ width: Dimensions.get('window').width, resizeMode: 'cover' }} />
            ))}
          </ScrollImage>
        </ImagesContainer>

        <InfoPet>
          <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
            <PetName>Olá, eu sou o {petDetail.name}</PetName>

            <TouchableOpacity onPress={() => { }}>
              <MaterialIcons name="grade" size={35} color="#f1c40f" />
            </TouchableOpacity>
          </View>

          <PetDetail>🐶 Tenho {petDetail.age} anos e sou da raça ❤️ {petDetail.breed}</PetDetail>
          <PetDescription>{petDetail.description}</PetDescription>
        </InfoPet>

        <InfoAdot>
          <InfoAdotTitle>Informações para adoção</InfoAdotTitle>
          <InfoAdotDescription>Todos os nossos bichinhos são doados vacinados e castrados. No caso de filhotes, são doados, no mínimo, com a primeira dose de vacina (V8). </InfoAdotDescription>
        </InfoAdot>

        <ContactsContainer>
          <ContactMail onPress={()=>handleMessageMail(petDetail)}>
            <Ionicons name="mail-outline" size={30} color="#fff" />
            <ContactWhatsTitle>Entre em contato por e-mail</ContactWhatsTitle>
          </ContactMail>
          <ContactWhats onPress={()=>handleMessageWhats(petDetail)}>
            <Ionicons name="logo-whatsapp" size={30} color="#fff" />
            <ContactEmailTitle>Entre em contato por Whatsapp</ContactEmailTitle>
          </ContactWhats>
        </ContactsContainer>
      </ScrollView>
    </Container>
  )
}

export default Detail;