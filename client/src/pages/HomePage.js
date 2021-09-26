import React, { useEffect, useState } from 'react'
import { Scorecard, TeamName, TeamRow, TeamScore } from '../components/ScoreCard';
import { MainHeader } from '../components/Header';
import loadingImg from '../images/spin.svg'
//http://api.football-data.org/v2/teams/759/matches
const HomePage = () => {

   useEffect(() => {

      fetchMatches();
   }, []);

   const [matches, setMatches] = useState([]);
   const [isLoading, setisLoading] = useState(true);
   const fetchMatches = async () => {
      const response = await fetch("http://api.football-data.org/v2/teams/57/matches", {
         method: 'GET',
         headers: {
            'X-Auth-Token': '8c5b41465c1b4aa4bacb9a446dc74bff'
         }
      })
      const result = await response.json();
      // console.log(result.matches);
      setMatches(result.matches.sort(sortByDate));
      setisLoading(false);

   }

   const sortByDate = (a, b) => {
      const itemA = a.utcDate;
      const itemB = b.utcDate;

      let comparison = 0;

      itemA > itemB ? comparison = 1 : comparison = -1;

      return comparison * -1;
   }

   return (
      <MainHeader >

         {isLoading ?
            <div className="loading">
               <div className="loading-content">
                  <h1>Loading...</h1>
                  <img src={loadingImg} alt="loading" />
               </div>
            </div> :
            <>
               <h1>recent matches</h1>
               <div className="container scores-container">

                  {matches.map((match) => (

                     match.score.fullTime.homeTeam === null ?
                        null
                        :
                        <Scorecard className="match-card" key={match.id}>
                           <TeamRow>
                              <TeamName>{match.homeTeam.name}</TeamName>
                              <TeamScore>{match.score.fullTime.homeTeam}</TeamScore>
                           </TeamRow>
                           <TeamRow>
                              <TeamName>{match.awayTeam.name}</TeamName>
                              <TeamScore>{match.score.fullTime.awayTeam}</TeamScore>
                           </TeamRow>

                        </Scorecard>

                  ))}
               </div>
            </>
         }
      </MainHeader>
   )
}

export default HomePage
