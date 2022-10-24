import React from "react";
import { Details, Summary } from "./Details";
import MatchCard from "./MatchCard";

const Matches = ({ matches, children }) => {
    return (
        <>
            <Details>
                <Summary>{children}</Summary>
                <div className="container scores-container">
                    {matches.map((match) => (
                        <MatchCard match={match} />
                    ))}
                </div>
            </Details>
        </>
    );
};

export default Matches;
