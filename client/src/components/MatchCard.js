import {
    Column,
    Scorecard,
    TeamName,
    TeamRow,
    TeamScore,
    TeamScoreContainer,
} from "./Styled/ScoreCard";

const MatchCard = ({ match }) => {
    if (!match) {
        return <h1>No match found</h1>;
    }

    return (
        <Scorecard
            className={`match-card ${
                match.homeTeam.name === "Arsenal FC" && "home"
            }`}
            key={match.id}
        >
            <span>{match.competition.name}</span>
            <div className="time-date">
                <span className="date">
                    {new Date(match.utcDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        weekday: "long",
                        timeZone: "UTC",
                    })}
                </span>
                <span className="time">
                    {" "}
                    {new Date(match.utcDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}{" "}
                </span>
            </div>
            <TeamRow>
                <Column>
                    <img
                        src={`https://resources.premierleague.com/premierleague/badges/70/${match.homeTeam.altIds.opta}.png`}
                        alt={match.homeTeam.name}
                        height="60"
                        width="60"
                    />
                    <TeamName>{match.homeTeam.name}</TeamName>
                </Column>
                <TeamScoreContainer>
                    <TeamScore>
                        {match.score.fullTime.homeTeam ?? "0"}
                        {" : "}
                        {match.score.fullTime.awayTeam ?? "0"}
                    </TeamScore>
                </TeamScoreContainer>
                <Column>
                    <img
                        src={`https://resources.premierleague.com/premierleague/badges/70/${match.awayTeam.altIds.opta}.png`}
                        alt={match.awayTeam.name}
                        height="60"
                        width="60"
                    />
                    <TeamName>{match.awayTeam.name}</TeamName>
                </Column>
            </TeamRow>
        </Scorecard>
    );
};

export default MatchCard;
