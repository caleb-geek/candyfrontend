import React from 'react';
import './Dashboard.css'
import {useHistory} from 'react-router-dom'

const Dashboard = () => {
    const history = useHistory()
    return ( 
        <div className ="dashboard">
        <h1>Candy Cane Killer Game!!</h1>
        <p>We can't wait for you to ge started with this beautiful</p>
        <p>You are just one step click the button here below to get started!</p>
       
       
        <button onClick = {()=> history.push('/game')} >Lets Get Started</button>
        </div>
     );
}
 
export default Dashboard;