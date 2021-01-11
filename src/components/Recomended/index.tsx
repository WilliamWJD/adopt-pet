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

interface RecomendedProps{
    title:string;
}

const Recomended: React.FC<RecomendedProps> = ({ title }) => {
  return(
      <Container>
          <Title>{title}</Title>
          <BoxItems horizontal={true} showsHorizontalScrollIndicator={false}>
              <Item>
                  <ImagePet 
                    source={{ uri:'https://i.pinimg.com/originals/34/80/dc/3480dcfd45f6e4e343c28c4acf43748d.png' }}
                    style={{ resizeMode:"contain" }}
                  />
                  <PetName>Tor</PetName>
                  <PetAge>5 anos</PetAge>
              </Item>

              <Item>
                  <ImagePet 
                    source={{ uri:'https://cozinhacanina.com.br/wp-content/uploads/2020/09/racoes-para-Pastor-alemao.png' }}
                    style={{ resizeMode:"contain" }}
                  />
                  <PetName>Rex</PetName>
                  <PetAge>4 anos</PetAge>
              </Item>

              <Item>
                  <ImagePet 
                    source={{ uri:'https://lh3.googleusercontent.com/proxy/3KhHg19evZ3bAvtvuHrvUTlw91mY7hvKp_A_1Z-pxBVa2P5-rEbaa4OtvjLufVl9GCtnZyVogt9Dt8JpPp7myMyIDSQ_H5lot4VUoS0zXNFhdNEkMkw' }}
                    style={{ resizeMode:"contain" }}
                  />
                  <PetName>March</PetName>
                  <PetAge>2 anos</PetAge>
              </Item>
          </BoxItems>
      </Container>
  )
}

export default Recomended;