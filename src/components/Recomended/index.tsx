import React from 'react';
import { View, ScrollView } from 'react-native';

import { 
    Container, 
    Title ,
    BoxItems,
    Item,
    ImagePet,
    PetName,
    PetAge
} from './styles';

const Recomended: React.FC = () => {
  return(
      <Container>
          <Title>❤️ Recomendados</Title>
          <BoxItems horizontal={true} showsHorizontalScrollIndicator={false}>
              <Item>
                  <ImagePet 
                    source={{ uri:'https://conviteasaude.com.br/wp-content/uploads/2017/08/shih-tzu-e1574943268872.jpg' }}
                  />
                  <PetName>Tor</PetName>
                  <PetAge>5 anos</PetAge>
              </Item>

              <Item>
                  <ImagePet 
                    source={{ uri:'https://img.olx.com.br/images/96/960096223123824.jpg' }}
                  />
                  <PetName>Rex</PetName>
                  <PetAge>4 anos</PetAge>
              </Item>

              <Item>
                  <ImagePet 
                    source={{ uri:'https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd.jpeg' }}
                  />
                  <PetName>March</PetName>
                  <PetAge>2 anos</PetAge>
              </Item>
          </BoxItems>
      </Container>
  )
}

export default Recomended;