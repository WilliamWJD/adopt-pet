import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, PageTitle } from './styles';

interface HeaderProps{
  title:string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [])

  return (
    <Container>
      <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={30} color="#382927" />
      </TouchableOpacity>
      <PageTitle>{title}</PageTitle>
    </Container>
  )
}

export default Header;