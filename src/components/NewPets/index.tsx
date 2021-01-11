import React from 'react';
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

const NewPets: React.FC = () => {
  return (
    <Container>
      <Title>🐶 Novos Pets</Title>
      <Subtitle>Encontre um pet para o seu lar</Subtitle>

      <BoxItems>
        <Item>
          <Detail>
            <PetName>Marvin</PetName>
            <PetAge>1 ano</PetAge>
            <Contacts>
              <Ionicons name="mail-outline" size={18}/>
              <Ionicons name="call-outline" size={18} style={{ marginLeft:10 }}/>
            </Contacts>
          </Detail>
          <ImagePet
            source={{ uri: 'https://misanimales.com/wp-content/uploads/2015/02/labrador-retriever.jpg' }}
          />
        </Item>

        <Item>
          <Detail>
            <PetName>Alfredo</PetName>
            <PetAge>5 Meses</PetAge>
            <Contacts>
              <Ionicons name="mail-outline" size={18}/>
              <Ionicons name="call-outline" size={18} style={{ marginLeft:10 }}/>
            </Contacts>
          </Detail>
          <ImagePet
            source={{ uri: 'https://img.mfrural.com.br/api/image?url=https://s3.amazonaws.com/mfrural-produtos-us/312835-308316-1664398-vendo-3-filhotes-de-bulldog-ingles-062-99233-1221.jpg&width=480&height=288&mode=4' }}
          />
        </Item>
      </BoxItems>
    </Container>
  )
}

export default NewPets;