import React, { useCallback, useEffect, useState } from "react";
import { MainHeader } from "../components/Header";
import loadingImg from "../images/ball.svg";
import Matches from "../components/Matches";
import { fetchMatches, fetchTeams } from "../api/getTeamInfo";
import Tabs from "../components/Tabs";
import { useQuery } from "react-query";

const HomePage = () => {
    const sortByDate = (a, b) => {
        const itemA = new Date(a.utcDate);
        const itemB = new Date(b.utcDate);

        let comparison = 0;

        itemA > itemB ? (comparison = 1) : (comparison = -1);

        return comparison * 1;
    };

    const { data, status, error } = useQuery(["matches"], fetchMatches);
    const {
        data: teamsData,
        status: teamsStatus,
        error: teamsError,
    } = useQuery(["teams"], fetchTeams);

    let sortedMatches = [];
    let teams = [];
    if (status === "success" && teamsStatus === "success") {
        sortedMatches = data.matches.sort(sortByDate);
        teams = teamsData;
    }

    const upcomingMatches = sortedMatches.filter(
        (match) => match.score.fullTime.homeTeam === null
    );
    const upcomingMatchesWithAltIds = upcomingMatches.map((match) => {
        const teamA = teams.find(
            (team) =>
                team.name ===
                match.homeTeam.name.replace(/ FC$/, "").replace(/&/g, "and")
        );
        const teamB = teams.find(
            (team) =>
                team.name ===
                match.awayTeam.name.replace(/ FC$/, "").replace(/&/g, "and")
        );
        return { ...match, homeTeam: teamA, awayTeam: teamB };
    });

    const pastMatches = sortedMatches.filter(
        (match) => match.score.fullTime.homeTeam !== null
    );
    const pastMatchesWithAltIds = pastMatches.map((match) => {
        const teamA = teams.find(
            (team) =>
                team.name ===
                match.homeTeam.name.replace(/ FC$/, "").replace(/&/g, "and")
        );
        const teamB = teams.find(
            (team) =>
                team.name ===
                match.awayTeam.name.replace(/ FC$/, "").replace(/&/g, "and")
        );
        return { ...match, homeTeam: teamA, awayTeam: teamB };
    });

    if (status === "loading" || teamsStatus === "loading") {
        return (
            <div className="loading">
                <div className="loading-content">
                    <h1>Loading...</h1>
                    <img src={loadingImg} alt="loading" />
                </div>
            </div>
        );
    }
    if (status === "error" || teamsStatus === "error") {
        return (
            <div className="loading">
                <div className="loading-content">
                    <h1>Error</h1>
                    <p>{error || teamsError}</p>
                </div>
            </div>
        );
    }

    const tabs = [
        {
            component: <Matches matches={upcomingMatchesWithAltIds} />,
            label: "Upcoming Matches",
            id: 0,
        },
        {
            component: <Matches matches={pastMatchesWithAltIds} />,
            label: "Past Matches",
            id: 1,
        },
    ];

    return (
        <MainHeader>
            <>
                <h1>
                    Arsenal {new Date().getFullYear()}/
                    {new Date().getFullYear() + 1} schedule
                </h1>
                <Tabs
                    components={tabs}
                    loading={teamsStatus === "loading" || status === "loading"}
                />
            </>
        </MainHeader>
    );
};

export default HomePage;
