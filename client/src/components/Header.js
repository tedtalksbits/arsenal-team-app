import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



export const MainHeader = styled.header`
   position: relative;
	padding-top: 7rem;
	padding-bottom: 8rem;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${props => props.image}) center center no-repeat;
   background-size: cover;
	text-align: center;

   .container{
      padding: 1rem;

      .club-data{
         background: rgba(200,0,20,0.1);
         backdrop-filter: blur(15px);
         border-radius: 2rem;
         padding: 3rem;
         color: white;
         max-width: 600px;
         margin: 0 auto;

      }
   }
`
const Title = styled.div`

   display: flex;
   align-items: center;
  justify-content: center;

   h1{
      font-size: clamp(2rem, 8vw, 3.5rem);
   }
   img{
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin-left: 10px;
   }
`
const Header = () => {

   useEffect(() => {
      fetchData();
   }, []);

   const [arsenalData, setArsenalData] = useState([]);

   async function fetchData() {
      const response = await fetch("http://api.football-data.org/v2/teams/57", {
         method: 'GET',
         headers: {
            'X-Auth-Token': '8c5b41465c1b4aa4bacb9a446dc74bff'
         }
      })
      const result = await response.json();

      setArsenalData(result);
      // console.log(result);

   }

   return (
      <MainHeader className="header" image="https://images.unsplash.com/photo-1577224682124-f87b20de2bf5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80">
         <div className="container">
            <div className="club-data">
               <Title className="title">
                  <h1>{arsenalData.shortName}</h1>
                  <img src={arsenalData.crestUrl} alt="logo" />
               </Title>
               <span>{arsenalData.tla}</span>
               <p>Founded: {arsenalData.founded}</p>
               <p>{arsenalData.venue}</p>
            </div>
         </div>
      </MainHeader>
   )
}

export default Header;
