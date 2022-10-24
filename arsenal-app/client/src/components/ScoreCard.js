import styled from "styled-components";

export const Scorecard = styled.div`
    width: 100%;
    background: #161616;
    border-radius: 2rem;
    padding: 2rem 1.5rem;
    color: white;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const TeamRow = styled.div`
    display: flex;
    align-items: center;
`;

export const Heading = styled.h5`
    font-weight: bold;
    margin: 0;
`;

export const TeamName = styled.h3`
    font-weight: bold;
    font-weight: 2rem;
    margin: 0;
`;

export const TeamScore = styled.h1`
    margin-left: auto;
`;
