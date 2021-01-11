import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top:20px;
`;

export const Title = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:18px;
    color:#382927;
`;

export const Subtitle = styled.Text`
    color:#7f8c8d;
    margin-bottom:10px;
`;

export const BoxItems = styled.View`
    margin-bottom:10px;
`;

export const Item = styled.TouchableOpacity`
    background-color:#fff;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    height:100px;
    border-radius:15px;
    margin-bottom:10px;
    padding:10px 20px;
`;

export const Detail = styled.View`
`;

export const PetName = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:18px;
`;

export const PetAge = styled.Text`
    font-family:'Roboto_400Regular';
    font-size:14px;
    color:#7f8c8d;
`;

export const Contacts = styled.View`
    display:flex;
    flex-direction:row;
    margin-top:8px;
`;

export const ImagePet = styled.Image`
    width:90px;
    height:100%;
    border-radius:10px;
`;


