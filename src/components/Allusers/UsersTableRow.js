import React,{useEffect,useState} from 'react';
import './Allusers.css'
import axios from 'axios';


const UsersTableRow = () => {

const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://68.183.72.41:8000/api/user')
    .then((result)=>{
      setUsers(result.data)
     
  })
  }, []);

    return ( 
        <>
        {users.map((user)=>(
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.username}</td>
               <td>{user.verificationString}</td>    
            </tr>
        ))}
        </>
     );
}
 
export default  UsersTableRow;