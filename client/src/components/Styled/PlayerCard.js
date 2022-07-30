import styled from "styled-components";

export const Container = styled.div`
    margin: 14rem 0;
`;
export const PlayerCardElement = styled.div`
    border-radius: 2rem;
    background: blueviolet;
    max-width: 600px;
    margin: auto;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const PlayerCardHeadElement = styled.div`
    background: #060821;
    position: relative;
    height: 300px;
    border-radius: 2rem 2rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const PlayerCardDetailsElement = styled.div`
    background: #a31d21;
    border-radius: 0 0 2rem 2rem;
    padding: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const PlayerCardImageElement = styled.img`
    height: 500px;
    width: 500px;
    object-fit: contain;
    background: transparent;
    position: absolute;
    bottom: 0;
`;
