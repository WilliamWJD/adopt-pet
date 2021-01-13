import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
`;

export const Header = styled.View`
    height:60px;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:10px;
    padding:10px 20px;
`;

export const PageTitle = styled.Text`
   margin:auto;
   font-family:'Roboto_700Bold';
   font-size:20px;
   color:#382927;
`;

export const ImagesContainer = styled.View``;

export const ScrollImage = styled.ScrollView``;

export const Image = styled.Image`
    width:${Dimensions.get('window').width};
    height:200px;
`;

export const InfoPet = styled.View`
    padding:10px 20px;
`;

export const PetName = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:25px;
    color:#382927;
`;

export const PetDescription = styled.Text`
    margin-top:10px;
    font-family:'Roboto_400Regular';
    color: #7f8c8d;
    line-height:20px;
`;

export const InfoAdot = styled.View`
    padding:10px 20px;
`;

export const InfoAdotTitle = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:18px;
    color:#382927;
`;

export const InfoAdotDescription = styled.Text`
    margin-top:10px;
    font-family:'Roboto_400Regular';
    color: #7f8c8d;
    line-height:20px;
`;

export const ContactsContainer = styled.View`
    padding:0 20px;
    margin-top:10px;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

export const ContactWhats = styled.TouchableOpacity`
    height:50px;
    width:100%;
    background-color:#e74c3c;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding:0 10px;
`;

export const ContactWhatsTitle = styled.Text`
    font-family:'Roboto_700Bold';
    color:#fff;
    margin-top:5px;
    margin-left:10px;
`;

export const ContactMail = styled.TouchableOpacity`
    height:50px;
    width:100%;
    background-color:#2ecc71;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding:0 10px;
    margin-top:10px;
`;

export const ContactEmailTitle = styled.Text`
    font-family:'Roboto_700Bold';
    color:#fff;
    margin-top:5px;
    margin-left:10px;
`;






