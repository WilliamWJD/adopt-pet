import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import Recomended from '../../components/Recomended';
import NewPet from '../../components/NewPets';

import { 
  Container, 
  Header, 
  MyFavoriteList, 
  MyFavoriteListTitle,
  BoxTitle,
  Title,
  SubTitle,
  BoxSearch,
  Input
} from './styles';

const Home: React.FC = () => {
  return(
    <Container>
      <Header>
        <MyFavoriteList>
          <MyFavoriteListTitle>Favoritos ⭐</MyFavoriteListTitle>
        </MyFavoriteList>
      </Header>

      <BoxTitle>
        <Title>Adote</Title>
        <SubTitle>Escolha um pet para alegrar o seu dia</SubTitle>
      </BoxTitle>

      <BoxSearch>
        <Ionicons name="search-outline" size={20}/>
        <Input placeholder="Pesquisa por uma raça"/>
      </BoxSearch>

      <Recomended/>

      <NewPet/>

    </Container>
  )
}

export default Home;