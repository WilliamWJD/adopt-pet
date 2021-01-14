import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import NewPets from '../../components/NewPets';
import api from '../../services/api';

import { Container, TextNotFavorites } from './styles';

export interface IPets {
  id: number;
  name: string;
  age: number;
  path: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<IPets[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFavorites() {
      const response = await AsyncStorage.getItem('@favorites');

      if(response !== null){
        setFavorites([...favorites, JSON.parse(response)])
      }
    }
    loadFavorites();
  }, [])

  if (loading) {
    return (
      <Container>
        <Text>CARREGANDO</Text>
      </Container>
    )
  }

  return (
    <>
      <Header
        title="Favoritos"
      />

      <Container
        listFavorites={favorites ? true : false}
      >
        {favorites.length>=0 && (
          <TextNotFavorites listFavorites={favorites ? true : false}>😕 Ops parece que você não tem nenhum PET salvo nos seus favoritos</TextNotFavorites>
        )}
      </Container>
    </>
  )
}

export default Favorites;