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
    border-top-left-radius:20px;
    border-bottom-right-radius:20px;
    justify-content:center;
    padding:15px;
    margin-right:10px;
`;

export const ImagePet = styled.Image`
    width:120px;
    height:120px;
    justify-content:center;
    border-top-left-radius:20px;
    border-bottom-right-radius:20px;
`;

export const PetName = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:19px;
`;

export const PetAge = styled.Text`
    color:#95a5a6;
`;

