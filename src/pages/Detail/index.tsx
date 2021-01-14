import React, { useCallback } from 'react';
import { Linking } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  PageTitle,
  ImagesContainer,
  ScrollImage,
  Image,
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

const Detail: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(()=>{
    navigation.goBack();
  },[])

  const handleMessageWhats = useCallback(()=>{
    const text="Olá, tenho interesse em adotar o Theo, gostária de obter mais informações a respeito da adoção."
    const phone="5519988929523"

    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`)
  },[])

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={30} color="#382927"/>
        </TouchableOpacity>
        <PageTitle>Detalhe do Pet</PageTitle>
      </Header>

      <ScrollView>
        <ImagesContainer>
          <ScrollImage horizontal pagingEnabled>
            <Image source={{ uri: 'https://conviteasaude.com.br/wp-content/uploads/2017/08/shih-tzu-e1574943268872.jpg' }} />
            <Image source={{ uri: 'https://i.pinimg.com/736x/f5/a7/6c/f5a76c6242a867ee844899b20f1e38d3.jpg' }} />
          </ScrollImage>
        </ImagesContainer>

        <InfoPet>
          <PetName>Olá, eu sou o Theo</PetName>
          <PetDetail>🐶 Tenho 5 anos e sou da raça ❤️ Shit-zu</PetDetail>
          <PetDescription>
            Gosto muito de receber carinho e de brincar, fico triste quando fico sózinho, gosto de ficar perto do meu dono a todo momento, gosto muito de comer chinelos, por isso peço sua compreensão para não brigar comigo rs.
          </PetDescription>
        </InfoPet>

        <InfoAdot>
          <InfoAdotTitle>Informações para adoção</InfoAdotTitle>
          <InfoAdotDescription>Todos os nossos bichinhos são doados vacinados e castrados. No caso de filhotes, são doados, no mínimo, com a primeira dose de vacina (V8). </InfoAdotDescription>
        </InfoAdot>

        <ContactsContainer>
          <ContactWhats onPress={handleMessageWhats}>
            <Ionicons name="mail-outline" size={30} color="#fff"/>
            <ContactWhatsTitle>Entre em contato por e-mail</ContactWhatsTitle>
          </ContactWhats>
          <ContactMail>
            <Ionicons name="logo-whatsapp" size={30} color="#fff"/>
            <ContactEmailTitle>Entre em contato por Whatsapp</ContactEmailTitle>
          </ContactMail>
        </ContactsContainer>
      </ScrollView>
    </Container>
  )
}

export default Detail;