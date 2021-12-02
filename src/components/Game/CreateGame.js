import React,{useState} from 'react';
import {Link, Redirect,useHistory} from 'react-router-dom'
import '../../components/Form.css'
import {useFormik} from 'formik';
import axios from 'axios'

const CreateGame = (props) => {

const history = useHistory()

const [error,setError] = useState("")
    const formik = useFormik({
        initialValues:{
            gameName:''   
        },
        onSubmit:values => {
            
             axios.post ('http://127.0.0.1:5000/api/game', values)
              .then((response) => {
                history.push('/viewallgames')
                  
              }).catch((err)=>{
                 
            })
        },
        validate:values => {
            let errors = {}
            if(!values.gameName){
                errors.gameName = "Required*"
            }
    
            return errors
        }
    })

     return ( 
        <div className="login-box">
           <h2>Start new Game</h2>
        <form  onSubmit={formik.handleSubmit} >
       
        <div className="user-box">
        <input  type="text " id="gameName" name="gameName" 
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.gameName} />
       <label className="form-label" htmlFor="gameName">Game</label>
       {formik.touched.gameName && formik.errors.gameName?<div className="error">{formik.errors.gameName}</div>:null}
        </div>
       
        <input className="sub-btn"  type="submit" value="Create Game"/>
       
      </form>
       </div>
     );
}
 
export default CreateGame;