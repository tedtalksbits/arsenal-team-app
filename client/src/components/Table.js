import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from './Nav';
import loadingImg from '../images/spin.svg';

const Container = styled.div`
   margin: 3rem 0;

   .heading{
      text-align: center;
      margin: 2rem 0;
   }

`
const PlayerTable = styled.table`
   background: white;
   margin: 0 auto;
   width: 80%;
   border-collapse: collapse;
   text-align: left;
   border-radius: 12px;
   overflow: hidden;
   display: table;
   border-spacing: 0;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   max-width: 1100px;
   transition: .3s;

   th{
      background: #f11f1f;
      color: white;
   }
   th, td{
      padding: 10px 15px;
      transition: .3s;
   }
   tr{
      border-bottom: 1px lightgrey solid;
      text-transform: capitalize;
      cursor: pointer;
      transition: .5s background cubic-bezier(0.19, 1, 0.22, 1);
   }
   tr:nth-child(odd){
      background: #eeeeee;
   }
   tr:hover{
      background: #f11f1f;
      color: white;
   }

   @media (max-width: 768px) {
      td:nth-child(5),
      th:nth-child(5) { 
         display: none; 
      }
   }
   @media (max-width: 600px){
      td:nth-child(4), th:nth-child(4){
         display: none;
      }
   }
   @media (max-width: 374px){
      font-size: .75rem;

   }
`
const TableLink = styled.td`
   text-decoration: ${({ link }) => link ? "underline" : "none"};
`


const Table = () => {


   useEffect(() => {
      fetchData();
   }, []);

   const [playerData, setPlayerData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   async function fetchData() {
      const response = await fetch("https://arsenal-players-api.herokuapp.com/players", {
         method: 'GET',
      })
      const result = await response.json();

      setPlayerData(result);
      setIsLoading(false);

      // console.log(result);
   }
   const date = new Date().getFullYear();
   return (
      <Container>
         <div className="heading">
            <h1>The Arsenal {date} Squad</h1>
         </div>

         {isLoading ?
            <div className="loading">
               <div className="loading-content">
                  <h1>Loading...</h1>
                  <img src={loadingImg} alt="loading" />
               </div>
            </div> :

            <PlayerTable>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Position</th>
                     <th>Number</th>
                     <th>Nationality</th>
                     <th>Date Of Birth</th>
                  </tr>
               </thead>

               <tbody>
                  {playerData.map((player) => (
                     <tr key={player.id}>

                        <TableLink link={true}>
                           <NavLink to={`/team/${player.id} ${player.first_name}`}>
                              {player.first_name} {player.last_name}
                           </NavLink>
                        </TableLink>
                        <td>{player.position}</td>
                        <td>{player.shirt_number}</td>
                        <td><span className="flag">{player.flag}</span>{player.nationality}</td>
                        <td>{player.birthdate}</td>
                     </tr>

                  ))}
               </tbody>

            </PlayerTable>
         }
      </Container>
   )
}

export default Table
