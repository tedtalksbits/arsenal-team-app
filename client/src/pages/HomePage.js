import React, { useCallback, useEffect, useState } from "react";
import { MainHeader } from "../components/Header";
import loadingImg from "../images/spin.svg";
import Matches from "../components/Matches";
const HomePage = () => {
    const [matches, setMatches] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const fetchMatches = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_MATCHES_URL}`, {
            method: "GET",
            headers: {
                "X-Auth-Token": "8c5b41465c1b4aa4bacb9a446dc74bff",
            },
        });
        const result = await response.json();
        // console.log(result.matches);
        setMatches(result.matches.sort(sortByDate));
        setisLoading(false);
    }, []);
    useEffect(() => {
        fetchMatches();
    }, [fetchMatches]);

    //  const sortByDate = (a, b) => {
    //      const itemA = a.utcDate;
    //      const itemB = b.utcDate;

    //      let comparison = 0;

    //      itemA > itemB ? (comparison = 1) : (comparison = -1);

    //      return comparison * -1;
    //  };
    const sortByDate = (a, b) => {
        const itemA = new Date(a.utcDate);
        const itemB = new Date(b.utcDate);

        let comparison = 0;

        itemA > itemB ? (comparison = 1) : (comparison = -1);

        return comparison * 1;
    };

    const upcomingMatches = matches.filter(
        (match) => match.score.fullTime.homeTeam === null
    );
    const pastMatches = matches.filter(
        (match) => match.score.fullTime.homeTeam !== null
    );

    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading-content">
                    <h1>Loading...</h1>
                    <img src={loadingImg} alt="loading" />
                </div>
            </div>
        );
    }

    return (
        <MainHeader>
            <>
                <h1>
                    Arsenal {new Date().getFullYear()}/
                    {new Date().getFullYear() + 1} schedule
                </h1>
                <Matches matches={upcomingMatches}>
                    <span className="matches-dropdown">Upcoming Matches</span>
                </Matches>
                <Matches matches={pastMatches}>
                    <span className="matches-dropdown">Recent Matches</span>
                </Matches>
            </>
        </MainHeader>
    );
};

export default HomePage;
