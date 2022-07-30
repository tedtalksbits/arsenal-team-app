import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-block: 2rem;
`;
const Bar = styled.div`
    font-size: 20px;
    padding: 10px 60px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const Tabs = ({ components, isLoading }) => {
    const [active, setActive] = useState(0);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Container
                style={{ positon: "relative" }}
                className="scores-container"
            >
                {components?.map((component, index) => (
                    <Bar
                        key={component.id}
                        active={component.id === active}
                        onClick={() => setActive(index)}
                    >
                        {component.label}
                    </Bar>
                ))}
            </Container>
            <div>{components[active].component}</div>
        </>
    );
};

export default Tabs;
