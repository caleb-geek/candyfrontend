import React, { useState, useEffect } from "react";
import axios from 'axios'
import {Link, Redirect,useHistory,useParams} from 'react-router-dom'


const StartGame = () => {
  

const history = useHistory()
const {id} = useParams()
const [users,setUsers] = useState([])


useEffect(() => {
  axios.get('http://127.0.0.1:5000/api/user')
  .then((result)=>{
    setUsers(result.data)
   
})
}, []);

const values = users.map((item)=>{
return {userId:item.id,gameId:id,noOfkills:0,playerStatus:"alive"}
})


const handleCreateGame = () =>{
  let data =JSON.stringify({scores:values})
  console.log(data)
  axios.post ('http://127.0.0.1:5000/api/score',data)
  .then((response) => {

    history.push('/newscores')
      
  }).catch((err)=>{
     console.log(err)
     history.push('/newscores')
})
}

  return (
    <div className="check-participant">
    <h3>Let us play</h3>
      <button onClick={handleCreateGame} >Start Play</button>
      <button onClick={()=>history.push('/previouscores')}>View Previous Scores</button>
  </div>
  );
};

export default StartGame;
