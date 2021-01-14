import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { IPets } from '../../pages/Home';

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

interface Props{
  pets:Array<IPets>
}

const NewPets: React.FC<Props> = ({ pets }) => {
  return (
    <Container>
      <Title>🐶 Pets</Title>
      <Subtitle>Encontre um pet para o seu lar</Subtitle>

      <BoxItems>
        {pets.map(pet=>(
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