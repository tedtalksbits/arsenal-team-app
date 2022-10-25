import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchClubData, fetchTeamInfo } from "../api/getTeamInfo";
import { useQuery } from "react-query";
import loadingImg from "../images/ball.svg";
export const MainHeader = styled.header`
    position: relative;
    padding-top: 7rem;
    padding-bottom: 8rem;
    /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        url(${(props) => props.image}) center center no-repeat; */
    background: ${({ image }) =>
        image ? `url(${image}) center center no-repeat` : "#f6f6f6"};
    background-size: cover;
    text-align: center;

    .container {
        padding: 1rem;

        .club-data {
            background: rgba(200, 0, 20, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 2rem;
            padding: 3rem;
            color: white;
            max-width: 600px;
            margin: 0 auto;
        }
    }
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: clamp(2rem, 8vw, 3.5rem);
    }
    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        margin-left: 10px;
    }
`;
const Header = () => {
    const [teamId] = useState("57");

    const { data, status, error } = useQuery(["arsenal"], () =>
        fetchClubData(teamId)
    );

    if (status === "loading") {
        return (
            <div className="container">
                <div className="club-data">
                    <div className="loading">
                        <div className="loading-content">
                            <h1>Loading...</h1>
                            <img src={loadingImg} alt="loading" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (status === "error") {
        return (
            <div className="container">
                <div className="club-data">
                    <div className="loading">
                        <div className="loading-content">
                            <h1>Oh oh.... something went wrong</h1>
                            <p>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <MainHeader
            className="header"
            image="https://images.unsplash.com/photo-1577224682124-f87b20de2bf5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80"
        >
            <div className="container">
                <div className="club-data">
                    <Title className="title">
                        <h1>{data.shortName}</h1>
                        <img src={data.crestUrl} alt="logo" />
                    </Title>
                    <span>{data.tla}</span>
                    <p>Founded: {data.founded}</p>
                    <p>{data.venue}</p>
                </div>
            </div>
        </MainHeader>
    );
};

export default Header;
