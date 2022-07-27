import React, { useEffect, useState } from "react";
import styled from "styled-components";
import loadingImg from "../images/spin.svg";
import PlayerDetails from "./PlayerDetails";
import { Box, Modal } from "@material-ui/core";

const Container = styled.div`
    margin: 3rem 0;

    .heading {
        text-align: center;
        margin: 2rem 0;
    }
`;
const PlayerTable = styled.table`
    background: white;
    margin: 0 auto;
    width: 80%;
    border-collapse: collapse;
    text-align: left;
    border-radius: 12px;
    overflow: hidden;
    display: table;
    border-spacing: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    max-width: 1100px;
    transition: 0.3s;

    th {
        background: #f11f1f;
        color: white;
    }
    th,
    td {
        padding: 10px 15px;
        transition: 0.3s;
    }
    tr {
        border-bottom: 1px lightgrey solid;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.5s background cubic-bezier(0.19, 1, 0.22, 1);
    }
    tr:nth-child(odd) {
        background: #eeeeee;
    }
    tr:hover {
        background: #f11f1f;
        color: white;
    }

    @media (max-width: 768px) {
        td:nth-child(5),
        th:nth-child(5) {
            display: none;
        }
    }
    @media (max-width: 600px) {
        td:nth-child(4),
        th:nth-child(4) {
            display: none;
        }
    }
    @media (max-width: 374px) {
        font-size: 0.75rem;
    }
`;
const TableLink = styled.td`
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
    color: ${({ active }) => (active ? "#f11f1f" : "inherit")};
    :hover {
        color: ${({ active }) => (active ? "#fff" : "inherit")};
    }
`;

const Table = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const [playerData, setPlayerData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    async function fetchData() {
        const response = await fetch(
            "https://arsenal-players-api.herokuapp.com/players",
            {
                method: "GET",
            }
        );
        const result = await response.json();

        setPlayerData(result);
        setIsLoading(false);

        // console.log(result);
    }

    const date = new Date().getFullYear();
    return (
        <Container>
            <div className="heading">
                <h1>The Arsenal {date} Squad</h1>
            </div>

            {isLoading ? (
                <div className="loading">
                    <div className="loading-content">
                        <h1>Loading...</h1>
                        <img src={loadingImg} alt="loading" />
                    </div>
                </div>
            ) : (
                <PlayerTable>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {playerData.map((player) => (
                            <tr key={player.id}>
                                <TableLink
                                    link={true}
                                    active={
                                        selectedPlayer?.first_name ===
                                        player.first_name
                                    }
                                    onClick={(e) => {
                                        if (
                                            selectedPlayer?.first_name !==
                                                player?.first_name ||
                                            showDetails === false
                                        ) {
                                            setShowDetails(true);
                                            setSelectedPlayer(player);
                                            e.target.classList.add("current");
                                        }
                                    }}
                                >
                                    <span>
                                        {player.first_name} {player.last_name}
                                    </span>
                                </TableLink>

                                <td>{player.shirt_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </PlayerTable>
            )}

            <Modal
                open={showDetails}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={() => setShowDetails(false)}
            >
                <Box>
                    <span
                        style={{
                            position: "absolute",
                            right: "10%",
                            fontSize: "3rem",
                            zIndex: 2,
                            cursor: "pointer",
                            top: "5%",
                        }}
                        onClick={() => setShowDetails(false)}
                    >
                        ❌
                    </span>
                    <PlayerDetails player={selectedPlayer} />
                </Box>
            </Modal>
        </Container>
    );
};

export default Table;
