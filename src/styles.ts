import styled from 'styled-components';
import imageMap from './assets/map.png';

export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
    color: #FFF;

    div:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        input {
            height: 20px;
        }
    }
`;

export const MapGame = styled.div`
    width: 480px;
    height: 480px;
    background-image: url(${imageMap});
    background-position: left top;
    background-size: 100%;
`;