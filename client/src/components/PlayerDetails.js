import React from "react";
import {
    Container,
    PlayerCardElement,
    PlayerCardDetailsElement,
    PlayerCardHeadElement,
    PlayerCardImageElement,
} from "./Styled/PlayerCard";

const PlayerDetails = ({ player }) => {
    return (
        <Container>
            <PlayerCardElement>
                <PlayerCardHeadElement>
                    <PlayerCardImageElement
                        src={
                            player.player_image ||
                            "https://via.placeholder.com/150"
                        }
                        alt="player"
                    />
                </PlayerCardHeadElement>
                <PlayerCardDetailsElement>
                    <h1>
                        <span>{player.first_name}</span>
                        <span> {player.last_name}</span>
                    </h1>
                    {player.shirt_number == null && player.on_loan === true ? (
                        <h1>On Loan ({player.loan_team})</h1>
                    ) : (
                        <h1>#{player.shirt_number}</h1>
                    )}

                    <h3>Position: {player.position}</h3>
                    <h3>
                        Date of birth:&nbsp;
                        {new Date(player.birthdate).toLocaleDateString(
                            "en-gb",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "utc",
                            }
                        )}
                    </h3>
                    <h4>
                        Country: {player.flag}
                        {player.nationality}
                    </h4>
                </PlayerCardDetailsElement>
            </PlayerCardElement>
        </Container>
    );
};

export default PlayerDetails;
