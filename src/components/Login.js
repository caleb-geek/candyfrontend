import React,{useState} from 'react';
import {Link, Redirect,useHistory} from 'react-router-dom'
import {useToken} from '../utils/useToken'
import './Form.css'
import {useFormik} from 'formik';
import axios from 'axios'

const Login = (props) => {
const [token,setToken] = useToken()
const history = useHistory()
const [isloggedIn,setisloggedIn] = useState(false)
const [error,setError] = useState("")
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:values => {
             axios.post ('http://localhost:5000/api/user/login', values)
              .then((response) => {
               const {token} = response.data
                setToken(token)
                history.push('/')
                  
              }).catch((err)=>{
                 
            })
        },
        validate:values => {
            let errors = {}
            if(!values.username){
                errors.username = "Required*"
            }
            if(!values.password){
                errors.password = "Required*"
            }


            return errors
        }
    })

    if(isloggedIn){
        return <Redirect to={'/'}/>
    }
    let err = ""
    if(error.message){
     err = (
         <div className="login-error">
             {error.message}
         </div>
     )
    }
    return ( 
        <div className="login-box">
           <h2>Candy Cane Login</h2>
          {err}
        <form onSubmit={formik.handleSubmit} >
     <div className="user-box">
     <input className="form-item" type="text " id="username" name="username" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.username} />
    <label  htmlFor="username ">Username</label>
     {formik.touched.username && formik.errors.username?<div className="error">{formik.errors.username}</div>:null}
 </div>
       
   <div className="user-box">
   <input type="password" id="pass" name="password" 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.password}/>
        <label htmlFor="password ">Password</label>
     {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
   </div>
      
   <input className="sub-btn"  type="submit" value="Login"/>
     
     
   
   {/* <Link to="/register" className="btn-reg">Forgot Password</Link>
     <Link to="/register" className="btn-reg">Create New Account</Link> */}
   
      </form>
       </div>
     );
}
 
export default Login;