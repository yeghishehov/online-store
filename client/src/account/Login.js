import React, { useState } from 'react'
import { Typography, TextField, Snackbar } from '@material-ui/core';
import MuiAlert  from '@material-ui/lab/Alert';
import axios from '../utils/axiosConfig';
import useStyles from './style'

export default function Login () {
  const classes = useStyles();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////------------------------- registration testing-------------------------------- /////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [form, setForm] = useState({email: '', password: ''});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const registerHandler = async () => {
    try {
      const data = await axios.post(`/api/auth/register`, {...form})

    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className={classes.root} >
      {error 
        ? (
          <Snackbar >
            <MuiAlert variant="filled" severity="error" >
              {`${error}`}
            </MuiAlert>
          </Snackbar>
        ) : null
      }
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
        </div>
        <div className={classes.textField}>
          Password
          <TextField
            name = 'password'
            value = {form.password}
            onChange = {handleChange}
            variant = "outlined"
          />
        </div>
      </div>
      <button onClick={registerHandler} >reg</button>
    </div>
  )
}