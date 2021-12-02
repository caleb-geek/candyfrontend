import React,{useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Allusers.css'
import UsersTableRow from './UsersTableRow';




const Allusers= () => {
  const history = useHistory()
 
return ( 
  <div className="allproducts">
  <h1>All Users</h1>
  <button onClick={()=>history.push('/game')}>Back</button>
  <table>
  <tr>
    <th>Id</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>Username</th>
    <th>Pass Code</th>
  </tr>
<UsersTableRow/>
</table>

  
  </div>
   );
}
 
export default Allusers;