import React from "react";

import MatchCard from "./MatchCard";

const Matches = ({ matches, children }) => {
    return (
        <>
            <div className="container scores-container">
                {matches.map((match) => (
                    <MatchCard match={match} key={match.id} />
                ))}
            </div>
        </>
    );
};

export default Matches;
