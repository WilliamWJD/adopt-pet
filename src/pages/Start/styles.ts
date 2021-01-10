import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#ecf0f1;
    padding:40px;
`;

export const BoxWelcome = styled.View`
    background-color:#fff;
    padding:60px 20px;
    border-radius:20px;
    box-shadow: 10px 10px 10px black;
    margin: 0 0 20px 0;

    display:flex;
    align-items:center;
`;

export const BoxWelcomeTitle = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:30px;
    margin-bottom:10px;
`;

export const BoxWelcomeSubTitle = styled.Text`
    font-family:'Roboto_400Regular';
    font-size:16px;
    color:#7f8c8d;
    text-align:center;
`;

export const ButtonStart = styled.TouchableOpacity`
    background-color:#382927;
    padding:15px 25px;
    border-radius:20px;
`;

export const TextButton = styled.Text`
    color:#fff;
    font-family:'Roboto_700Bold';
`;

