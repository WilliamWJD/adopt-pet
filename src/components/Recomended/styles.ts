import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top:20px;
`;

export const Title = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:18px;
`;

export const BoxItems = styled.ScrollView`
    margin-top:10px;
`;

export const Item = styled.TouchableOpacity`
    width:150px;
    background-color:#fff;
    border-radius:15px;
    justify-content:center;
    padding:15px;
    margin-right:10px;
`;

export const ImagePet = styled.Image`
    width:120px;
    height:120px;
    justify-content:center;
`;

export const PetName = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:19px;
`;

export const PetAge = styled.Text`
    color:#7f8c8d;
    font-size:13px;
`;

