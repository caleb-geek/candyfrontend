import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './ViewGames.css'
import {Link} from 'react-router-dom';

const ViewAllGames = () => {

    const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://68.183.72.41:8000/api/game')
    .then((result)=>{
      setGames(result.data)
     
  })
  }, []);
 
    return ( 
         <div className="container">
           <h1>All Games</h1>
            <ul>
            <div>
         {games.map(function({id,gameName}){
         return (
         <li key={id}><Link  to={`/startgame/${id}`}>{gameName}</Link></li>
         )
          })}
      </div>
            </ul>

        </div>
     );
}
 
export default ViewAllGames;