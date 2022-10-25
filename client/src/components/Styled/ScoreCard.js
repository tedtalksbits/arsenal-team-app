import styled from "styled-components";

export const Scorecard = styled.div`
    width: 100%;
    background: white;
    border-radius: 2rem;
    padding: 1rem 1.5rem;
    color: white;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    color: #1f1f1f;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
    font-size: 0.9rem;
    margin: 0;
`;

export const TeamScore = styled.h1`
    /* margin-left: auto; */
    white-space: nowrap;
`;

export const TeamScoreContainer = styled.div`
    flex: 1;
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    gap: 0.5rem;
`;
