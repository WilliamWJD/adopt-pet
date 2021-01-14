import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
`;

export const ImagesContainer = styled.View``;

export const ScrollImage = styled.ScrollView``;

export const ImageBack = styled.Image`
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

export const PetDetail = styled.Text`
    font-family:'Roboto_700Bold';
    color:#7f8c8d;
    margin-top:5px;
`;

export const PetDescription = styled.Text`
    margin-top:20px;
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
    background-color:#2ecc71;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding:0 10px;
    margin-top:10px;
`;

export const ContactWhatsTitle = styled.Text`
    font-family:'Roboto_700Bold';
    color:#fff;
    margin-top:5px;
    margin-left:10px;
`;

export const ContactMail = styled.TouchableOpacity`
    width:100%;
    height:50px;
    background-color:#e74c3c;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding:0 10px;
`;

export const ContactEmailTitle = styled.Text`
    font-family:'Roboto_700Bold';
    color:#fff;
    margin-top:5px;
    margin-left:10px;
`;






