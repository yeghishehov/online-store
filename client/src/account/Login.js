import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ROUTES } from '../globals/routes';
import useStyles from './style';

export default function Login () {
  const classes = useStyles();

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
            // value = {form.email}
            // onChange = {handleChange}
            variant = "outlined"
          />
          {/* {error.email} */}
        </div>
        <div className={classes.textField}>
          Password 
          <TextField
            name = 'password'
            // value = {form.password}
            // onChange = {handleChange}
            variant = "outlined"
          />
          {/* {error.password} */}
        </div>
        {/* { `${error.message}${message}` } */}
      </div>
      <div className={classes.buttons}>
        <Link to="#" className={classes.link}> Forgot your password? </Link>
        <Button className={classes.signIn}> SIGN IN </Button>
        <Link to={ROUTES.register} className={classes.link}> Create account </Link>
      </div>
    </div>
  )
}