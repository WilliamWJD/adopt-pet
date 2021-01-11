import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    padding:10px 20px;
`;

export const Header = styled.View`
    height:60px;

    display:flex;
    align-items:flex-end;
    justify-content:center;
`; 

export const MyFavoriteList = styled.TouchableOpacity`
    display:flex;
    flex-direction:row;
`;

export const MyFavoriteListTitle = styled.Text`
    font-family:'Roboto_400Regular';
    font-size:17px;
    margin-right:5px;
    color:#382927;
`;

export const BoxTitle = styled.View`
    margin-top:15px;
`;

export const Title = styled.Text`
    font-family:'Roboto_700Bold';
    font-size:25px;
`;

export const SubTitle = styled.Text`
    font-size:15px;
    font-family:'Roboto_400Regular';
`;

export const BoxSearch = styled.View`
    margin-top:20px;
    height:50px;
    
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:5px 20px;
    border-radius:20px;
    background-color:#fff;

`;

export const Input = styled.TextInput`
    flex:1;
    margin:0 10px;
`;


