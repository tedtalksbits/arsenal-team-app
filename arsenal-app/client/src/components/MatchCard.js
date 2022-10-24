import React from "react";
import { Scorecard, TeamName, TeamRow, TeamScore } from "./ScoreCard";

const MatchCard = ({ match }) => {
    return (
        <Scorecard
            className={`match-card ${
                match.homeTeam.name === "Arsenal FC" && "home"
            }`}
            key={match.id}
        >
            <TeamRow>
                <TeamName>{match.homeTeam.name}</TeamName>
                <TeamScore>{match.score.fullTime.homeTeam}</TeamScore>
            </TeamRow>
            <TeamRow>
                <TeamName>{match.awayTeam.name}</TeamName>
                <TeamScore>{match.score.fullTime.awayTeam}</TeamScore>
            </TeamRow>
            <span className="score-card-date">
                {new Date(match.utcDate).toLocaleDateString()}
            </span>
        </Scorecard>
    );
};

export default MatchCard;
