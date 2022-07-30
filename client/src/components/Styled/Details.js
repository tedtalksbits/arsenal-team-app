import styled from "styled-components";

export const Details = styled.details`
    summary::-webkit-details-marker {
        display: none;
    }
    &[open] > summary:before {
        transform: rotate(90deg);
        border-color: transparent transparent transparent white;
    }
    &[open] > summary {
        background: #a31d21;
        color: white;
    }
    box-sizing: border-box;
    margin-top: 5px;
`;

export const Summary = styled.summary`
    &:before {
        content: "";
        border-width: 0.4rem;
        border-style: solid;
        border-color: transparent transparent transparent red;
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        transform: rotate(0);
        transform-origin: 0.2rem 50%;
        transition: 0.25s transform ease;
    }
    border: 4px solid transparent;
    outline: none;
    padding: 1rem;
    display: block;
    padding-left: 2.2rem;
    position: relative;
    cursor: pointer;
    transition: 0.25s all ease;
    :hover {
        background: #f11f1f;
        color: white;
        border-color: transparent transparent transparent white;
    }
`;
