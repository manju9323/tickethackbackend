import axios from 'axios';
import React from 'react';
//import {url} from './App'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useFormik} from 'formik';
import { toast} from 'react-toastify';
import * as yup from 'yup';
import "./all.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import CookieParser from 'cookieparser';




function Login(props) {

 

  const formik = useFormik({
    initialValues:{
    email:'',
    password:'',
  },
  validationSchema:yup.object({
    email:yup.string().required('* Required'),
    password:yup.string('enter string format').required('* Required').min(1,"not less than 1").max(9999999999,"not greater than 100000"),

  }),
  
  
  
  onSubmit:async(values)=>{
  
    await axios.post("https://ticketbackend.onrender.com/api/auth/login",values)
    .then( res=>{
     console.log(values)
    localStorage.setItem("mm",JSON.stringify(res.data))

    props.history.push("/home");
  
    })
    
    .catch(err=>{
      console.log(err.response.data.err)
      toast.error(err.response.data.err)}
    )
  } 
  
  })

  return (
    <div className="pass">
    <div className="p">
    <div className="tab"><h1>WELCOME TO GMAIL</h1></div>

    
    <form onSubmit={formik.handleSubmit} className=''>
    <div className='form-group'>
      <label for="email">EMAIL</label>
     < div>
       <input id="email"
      name="email" 
      type="email" 
      className="form-control" 
      placeholder="Enter email" 
      onBlur={formik.handleBlur}  
      onChange={formik.handleChange} 
      value={formik.values.email}  
      /></div> 
      {formik.touched.email && formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null}
    </div>
</form>

<form onSubmit={formik.handleSubmit}>
    <div className='form-group'>
      <label for="password">PASSWORD</label>
     <div>
       <input id="password" 
        name="password" 
        type="password" 
        className="form-control"  
        placeholder="Enter password" 
        onBlur={formik.handleBlur} 
        onChange={formik.handleChange} 
        value={formik.values.password} 
        /></div> 
      {formik.touched.password && formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div>:null}
    </div>

    <div className="form-group">
    <Button variant="primary" type="submit" >
       LOGIN
       </Button>
       <Link to="/register"><Button className="si" variant="primary" type="submit" >
        NEW REGISTER
       </Button></Link>
       </div>

</form>

  </div>   
  </div>
  )
}

export default Login