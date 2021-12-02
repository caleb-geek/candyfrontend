import React,{useState} from 'react';
import './Form.css';
import {useFormik} from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = (props) => {
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")
    const formik = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            username:'',
            password:'',
            classname:'',
            roleId:"student"
        },
        onSubmit:values => {
            
              axios.post ('http://localhost:5000/api/user', values)
              .then((response) => {
                setSuccess({message:"Account Created Successfully"})
                props.history.push('/viewallusers')
            }).catch((err)=>{
               setError({message:err.response.message})
            })
        },
        validate:values => {
            let errors = {}
            if(!values.firstname){
                errors.firstname = "Required*"
            }
            if(!values.lastname){
                errors.lastname = "Required*"
            }
            if(!values.email){
                errors.email = "Required"
            }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
              errors.email="Invaid email format"
            }
            if(!values.username){
                errors.username = "Required*"
            }
            if(!values.password){
                errors.password = "Required*"
            }
            
            if(!values.classname){
                errors.classname = "Required*"
            }


            return errors
        }
    })

     let created =""
    if(success.message) {
      created= (<div className="reg-success">
        {success.message}
      </div>)
    }
    let err =""
    if(error.message) {
      err= (<div className="reg-error">
        {error.message}
      </div>)
    }
    
    return ( 
       <div className="login-box">
           <h2>Candy Cane Sign up</h2>
          {err}
        <form onSubmit={formik.handleSubmit} >
       
      <div className="user-box">
      <input className="form-item" type="text " id="name" name="firstname" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.firstname}  />
        <label  htmlFor="fisrtname ">Firstname</label>
       {formik.touched.firstname && formik.errors.firstname?<div className="error">{formik.errors.firstname}</div>:null}
      </div>
       
     
    <div className="user-box">
    <input type="text " id="lastname" name="lastname" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.lastname} />
        <label  htmlFor="lastname ">Lastname</label>
       {formik.touched.lastname && formik.errors.lastname?<div className="error">{formik.errors.lastname}</div>:null}
    </div>
      
   
   
       <div className="user-box">
       <input  type="text " id="email" name="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur} 
       value={formik.values.email} />
        <label  htmlFor="email ">Email</label>
       {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
       </div>
      
     
     <div className="user-box">
     <input  type="text " id="username" name="username" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.username} />
       <label htmlFor="username ">Username</label>
     {formik.touched.username && formik.errors.username?<div className="error">{formik.errors.username}</div>:null}
     </div>
           

    <div className="user-box">
    <input type="text " id="classname" name="classname" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.classname} />
        <label  htmlFor="classname">Class</label>
     {formik.touched.address && formik.errors.address?<div classname="error">{formik.errors.classname}</div>:null}
    </div>
      
     <div className="user-box">
     <input  type="password" id="pass" name="password" 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.password}/>
         <label htmlFor="password">Password</label>
     {formik.touched.password && formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
     </div>
     
     <input className="sub-btn"  type="submit" value="Create Account"/>
     <Link to="/register" className="btn-reg">Login Here</Link>
   
      
      </form>
      {created}
       </div>
     
    
     );
}
 
export default Register;