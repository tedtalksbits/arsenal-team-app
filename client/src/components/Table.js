import React, { useState } from "react";
import styled from "styled-components";
import loadingImg from "../images/ball.svg";
import PlayerDetails from "./PlayerDetails";
import { Box, Modal } from "@material-ui/core";
import { Input } from "./Styled/Inputs";
import { useQuery } from "react-query";
import { fetchPlayers } from "../api/getTeamInfo";
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
    width: 90%;
    border-collapse: collapse;
    text-align: left;
    overflow: hidden;
    display: table;
    border-spacing: 0;
    max-width: 1100px;
    transition: 0.3s;

    th {
        color: #a5a5a7;
        background: white;
        font-weight: normal;
        font-size: 0.9rem;
    }
    th,
    td {
        padding: 10px 15px;
        transition: 0.3s;
    }
    tr {
        border-bottom: 1px #ebebeb solid;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.5s background cubic-bezier(0.19, 1, 0.22, 1);
    }
    /* tr:nth-child(odd) {
        background: #eeeeee;
    } */
    tr:hover {
        background: ${({ theme }) => theme.colors.arsenalRed};
        color: white;
    }

    @media (max-width: 374px) {
        font-size: 0.75rem;
    }
`;
const TableLink = styled.td`
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
    color: ${({ active }) =>
        active ? `${({ theme }) => theme.colors.arsenalRed}` : "inherit"};
    :hover {
        color: ${({ active }) => (active ? "#fff" : "inherit")};
    }
`;

const InputContainer = styled.div`
    padding: 2rem;
    max-width: 500px;
    margin: auto;
`;

export default function Table() {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const { data, status, error } = useQuery(["players"], fetchPlayers);

    let filteredData = [];
    if (status === "success") {
        filteredData = data.filter((player) => {
            return (
                player.first_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                player.last_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
        });
    }
    const date = new Date().getFullYear();

    if (status === "loading") {
        return (
            <div className="loading">
                <div className="loading-content">
                    <h1>Loading...</h1>
                    <img src={loadingImg} alt="loading" />
                </div>
            </div>
        );
    }
    if (status === "error") {
        return (
            <div className="loading">
                <div className="loading-content">
                    <h1>Oh oh.... something went wrong</h1>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <Container>
            <div className="heading">
                <h1>The Arsenal {date} Squad</h1>
                <InputContainer className="search">
                    <Input
                        type="text"
                        placeholder="Search by name"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </InputContainer>
            </div>

            <PlayerTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Number</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.map((player) => (
                        <tr key={player.id}>
                            <TableLink
                                link={true}
                                active={selectedPlayer?.id === player.id}
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

                            <td>
                                <img
                                    src={player?.player_image}
                                    alt={player?.first_name}
                                    height="50"
                                    width="50"
                                />
                            </td>
                            <td>{player.shirt_number}</td>
                        </tr>
                    ))}
                </tbody>
            </PlayerTable>

            <Modal
                open={showDetails}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={() => setShowDetails(false)}
            >
                <Box style={{ outline: 0 }}>
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
}
