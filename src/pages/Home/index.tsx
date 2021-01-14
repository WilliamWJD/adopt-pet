import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';

export interface IPets{
  id:number;
  name:string;
  age:number;
  path:string;
}

const Home: React.FC = () => {
  const [searchBreed, setSearchBreed] = useState('');
  const [pets, setPets] = useState<IPets[]>([]);

  useEffect(()=>{
    async function filterPetByBreed(){
      const response = await api.get('/pets',{
        params:{
          breed_like: searchBreed
        }
      })

      setPets(response.data)
    }

    filterPetByBreed();
  },[searchBreed])

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
        <Input 
          placeholder="Pesquisa por uma raça" 
          onChangeText={(text:string)=>setSearchBreed(text)} 
          value={searchBreed}
        />
      </BoxSearch>

      {!searchBreed && (
        <Recomended/>
      )}

      <NewPet
        pets={pets}
      />

    </Container>
  )
}

export default Home;