import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Title,
  Subtitle,
  BoxItems,
  Item,
  Detail,
  PetName,
  PetAge,
  Contacts,
  ImagePet
} from './styles';
import api from '../../services/api';

interface IRecomended{
  id:number;
  name:string;
  age:number;
  path:string;
}

const NewPets: React.FC = () => {
  const [newPets, setNewPets] = useState<IRecomended[]>([]);

  useEffect(()=>{
    async function loadNewPets(){
      const response = await api.get('/news');
      setNewPets(response.data);
    }
    loadNewPets();
  },[])

  return (
    <Container>
      <Title>🐶 Novos Pets</Title>
      <Subtitle>Encontre um pet para o seu lar</Subtitle>

      <BoxItems>
        {newPets.map(pet=>(
          <Item key={pet.id}>
            <Detail>
              <PetName>{pet.name}</PetName>
              <PetAge>{pet.age} anos</PetAge>
              <Contacts>
                <Ionicons name="mail-outline" size={18}/>
                <Ionicons name="call-outline" size={18} style={{ marginLeft:10 }}/>
              </Contacts>
            </Detail>
            <ImagePet
              source={{ uri: pet.path }}
            />
          </Item>
        ))}
      </BoxItems>
    </Container>
  )
}

export default NewPets;