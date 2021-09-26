import React, { useEffect, useState } from 'react';
import { Container, PlayerCard, PlayerCardDetails, PlayerCardHead, PlayerCardImage } from '../components/PlayerCard';


const Player = ({ match }) => {

   const id = match.params.id;
   const playerName = match.params.name;


   useEffect(() => {
      fetchPlayer()
   }, []);

   const [player, setPlayer] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   const fetchPlayer = async () => {
      const response = await fetch(`https://arsenal-players-api.herokuapp.com/players/${id}`, {
         method: 'GET',
         headers: {
            'X-Auth-Token': '8c5b41465c1b4aa4bacb9a446dc74bff'
         }
      })
      const result = await response.json();

      // console.log(result);
      setPlayer(result);
      setIsLoading(false);
   }

   console.log(id, playerName);



   return (
      <Container>

         <PlayerCard>
            <PlayerCardHead>
               {isLoading ?
                  <div className="loading">
                     <h1>Loading...</h1>
                  </div> :
                  <PlayerCardImage src={player.player_image} alt="player" />
               }
            </PlayerCardHead>
            <PlayerCardDetails>
               <h1>
                  <span>{player.first_name}</span>
                  <span> {player.last_name}</span>
               </h1>
               {player.shirt_number == null && player.on_loan === true ? <h1>On Loan ({player.loan_team})</h1> : <h1>#{player.shirt_number}</h1>}

               <h3>Position: {player.position}</h3>
               <h3>Date of birth:&nbsp;
                  {new Date(player.birthdate).toLocaleDateString(
                  'en-gb', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'utc'
               }
               )}
               </h3>
               <h4>Country: {player.flag}{player.nationality}</h4>
            </PlayerCardDetails>

         </PlayerCard>
      </Container>
   )
}

export default Player
