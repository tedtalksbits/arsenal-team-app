import styled from "styled-components";

export const Input = styled.input`
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.colors.grey};
    width: 100%;
`;
