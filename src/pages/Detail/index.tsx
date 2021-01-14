import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Linking, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    async function loadPetDetail() {
      setLoading(true);

      const params = route.params as IPetDetailProps;

      const response = await api.get(`/recomended/${params.id}`)
      console.log(response.data)
      setPetDetail(response.data)

      setLoading(false);
    }

    loadPetDetail();
  }, [])

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [])

  const handleMessageWhats = useCallback(() => {
    const text = `Olá, tenho interesse em adotar o ${petDetail.name}, gostária de obter mais informações a respeito da adoção.`
    Linking.openURL(`whatsapp://send?text=${text}&phone=${petDetail.whatsapp}`)
  }, [])

  if(loading){
    return(
      <>
        <Container>
          <Text>CARREGANDO</Text>
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
              <ImageBack key={item.id} source={{ uri: item.path }} style={{ width: Dimensions.get('window').width, resizeMode:'cover' }}/>
            ))}
          </ScrollImage>
        </ImagesContainer>

        <InfoPet>
          <PetName>Olá, eu sou o {petDetail.name}</PetName>
          <PetDetail>🐶 Tenho {petDetail.age} anos e sou da raça ❤️ {petDetail.breed}</PetDetail>
          <PetDescription>{petDetail.description}</PetDescription>
        </InfoPet>

        <InfoAdot>
          <InfoAdotTitle>Informações para adoção</InfoAdotTitle>
          <InfoAdotDescription>Todos os nossos bichinhos são doados vacinados e castrados. No caso de filhotes, são doados, no mínimo, com a primeira dose de vacina (V8). </InfoAdotDescription>
        </InfoAdot>

        <ContactsContainer>
          <ContactMail onPress={handleMessageWhats}>
            <Ionicons name="mail-outline" size={30} color="#fff" />
            <ContactWhatsTitle>Entre em contato por e-mail</ContactWhatsTitle>
          </ContactMail>
          <ContactWhats onPress={handleMessageWhats}>
            <Ionicons name="logo-whatsapp" size={30} color="#fff" />
            <ContactEmailTitle>Entre em contato por Whatsapp</ContactEmailTitle>
          </ContactWhats>
        </ContactsContainer>
      </ScrollView>
    </Container>
  )
}

export default Detail;