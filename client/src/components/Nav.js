import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
    background: ${({ theme }) => theme.colors.arsenalRed};
    color: white;
    height: 4rem;
    display: flex;
    padding: 1rem;
`;
const NavContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 1.3rem;
    font-weight: 700;
    max-width: 1100px;

    .MuiSvgIcon-root {
        color: white;
        height: 2rem;
        width: 2rem;
    }
`;
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`;
export const NavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    padding: 0;
    margin: 0;
`;

const Nav = () => {
    return (
        <>
            <Navbar>
                <NavContainer>
                    <IconButton edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <NavLinks>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/team">Team Table</NavLink>
                        More...
                    </NavLinks>
                </NavContainer>
            </Navbar>
        </>
    );
};

export default Nav;
