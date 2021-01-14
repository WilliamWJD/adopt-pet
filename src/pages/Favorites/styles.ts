import { css } from 'styled-components';
import styled from 'styled-components/native';

interface PropsContainer{
    listFavorites:boolean;
}

export const Container = styled.View<PropsContainer>`
    flex:1;
    padding: 0 20px;

    ${(props:PropsContainer)=>props.listFavorites && css`
        justify-content:center;
        align-items:center;
    `}
`;

export const TextNotFavorites = styled.Text`
    ${(props:PropsContainer)=>props.listFavorites && css`
        font-family:'Roboto_700Bold';
        font-size:17px;
    `}
`;
