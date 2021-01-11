import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import Recomended from '../../components/Recomended';

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
          <MyFavoriteListTitle>Favoritos</MyFavoriteListTitle>
          <Ionicons name="star-outline" size={20} color="#382927" />
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

      <Recomended
        title="Recomendados"
      />
    </Container>
  )
}

export default Home;