import React, { useState } from 'react'
import { Typography, TextField } from '@material-ui/core';
import axios from '../utils/axiosConfig';
import useStyles from './style'

export default function Login () {
  const classes = useStyles();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////------------------------- registration testing-------------------------------- /////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [form, setForm] = useState({email: '', password: ''});
  const [error, setError] = useState({email: "", password: "", message: ""});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const registerHandler = async () => {
    setError({ email: "", password: "", message: "" });
    setMessage("")
    try {
      const request = await axios.post(`/api/auth/register`, {...form})
      setMessage(request.data.message)
      setForm({email: '', password: ''});
    } catch (e) {
      const data = e.response.data;
      const isErroresExisted = 'errors' in data
      if (isErroresExisted){
        const email = data.errors.find(err => err.param === 'email')
        const pass = data.errors.find(err => err.param === 'password')
        console.log(email + " " + pass)
        setError({ 
          email: email ? email.msg : "",
          password: pass ? pass.msg : "",
          message: data.message,
        })
      } else {
        setError({ ...error, message: data.message })
      }
    }
  }

  return (
    <div className={classes.root} >
      <Typography align='center' variant='h3' >
        Login
      </Typography>

      <div className={classes.input}>
        <div className={classes.textField}>
          Email 
          <TextField
            name = 'email'
            value = {form.email}
            onChange = {handleChange}
            variant = "outlined"
          />
          {error.email}
        </div>
        <div className={classes.textField}>
          Password 
          <TextField
            name = 'password'
            value = {form.password}
            onChange = {handleChange}
            variant = "outlined"
          />
          {error.password}
        </div>
        { `${error.message}${message}` }
      </div>
      <button onClick={registerHandler} >reg</button>
    </div>
  )
}