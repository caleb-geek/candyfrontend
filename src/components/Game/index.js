import React from 'react';
import CreateGame from './CreateGame';
import {Link, Redirect,useHistory} from 'react-router-dom'
import './Game.css'


const Game = () => {
    const history = useHistory()
    return ( 
        <div>       
           <button onClick={()=>history.push('/creategame')}>Create Game</button>
           <button onClick={()=>history.push('/register')}>Add Players</button>
           <button onClick={()=>history.push('/viewallusers')}>View All Users</button>
        </div>
     );
}
 
export default Game;