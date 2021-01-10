import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackgroundStart from '../../assets/background-start.png';
import Background from '../../assets/background.png';

import { Container, BoxWelcome, BoxWelcomeTitle, BoxWelcomeSubTitle, ButtonStart, TextButton } from './styles';

const Start: React.FC = () => {
  const navigation = useNavigation();

  return(
    <Container source={Background}>
      <Image source={BackgroundStart} style={{ width:200, height:200 }}/>
      
      <BoxWelcome style={{ 
        shadowColor: "#382927",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 2,
      }}>
        <BoxWelcomeTitle>Bem-Vindo</BoxWelcomeTitle>
        <BoxWelcomeSubTitle>Faça a diferença e adote um pet, leve a alegria para sua casa ❤️</BoxWelcomeSubTitle>
      </BoxWelcome>

      <ButtonStart onPress={()=>navigation.navigate('Home')}>
        <TextButton>Vamos começar</TextButton>
      </ButtonStart>
    </Container>
  )
}

export default Start;