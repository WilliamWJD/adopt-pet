import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { 
    Container, 
    Title ,
    BoxItems,
    Item,
    ImagePet,
    PetName,
    PetAge
} from './styles';

interface IRecomended{
  id:number;
  name:string;
  age:number;
  path:string;
}

const Recomended: React.FC = () => {
  const [recomendeds, setRecomendeds] = useState<IRecomended[]>([])

  const navigation = useNavigation();

  useEffect(()=>{
    async function loadRecomendeds(){
      const response = await api.get('/recomended');
      setRecomendeds(response.data)
    }

    loadRecomendeds();
  },[])

  return(
      <Container>
          <Title>❤️ Recomendados</Title>
          <BoxItems horizontal={true} showsHorizontalScrollIndicator={false}>
              {recomendeds.map(recomended=>(
                <Item key={recomended.id} onPress={()=>navigation.navigate('Detail')}>
                    <ImagePet 
                      source={{ uri:recomended.path }}
                    />
                    <PetName>{recomended.name}</PetName>
                    <PetAge>{recomended.age} anos</PetAge>
                </Item>
              ))}
          </BoxItems>
      </Container>
  )
}

export default Recomended;