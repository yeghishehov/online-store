import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import axios from '../utils/axiosConfig';
import useStyles from './style';

function Register () {
  const classes = useStyles();
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const registerHandler = async () => {
    try {
      const request = await axios.post(`/api/auth/register`, {...form})
      setForm({email: '', password: '', firstName: '', lastName: ''});
      enqueueSnackbar(request.data.message, { variant: 'success' })
    } catch (e) {
      const data = e.response.data;
      const isErrorsExisted = 'errors' in data
      if (isErrorsExisted){
        const email = data.errors.find(err => err.param === 'email')
        const pass = data.errors.find(err => err.param === 'password')
        email && enqueueSnackbar(email.msg, { variant: 'warning' })
        pass && enqueueSnackbar(pass.msg, { variant: 'warning' })
        enqueueSnackbar(data.message, { variant: 'warning' })
      } else {
        enqueueSnackbar(data.message, { variant: 'warning' })
      }
    }
  }


  return (
    <div className={classes.root} >
      <Typography align='center' variant='h3' >
        Create Account
      </Typography>

      <div className={classes.input}>
        <div className={classes.textField}>
          First Name
          <TextField
            name = 'firstName'
            value = {form.firstName}
            onChange = {handleChange}
            variant = "outlined"
          />
        </div>
        <div className={classes.textField}>
          Last Name
          <TextField
            name = 'lastName'
            value = {form.lastName}
            onChange = {handleChange}
            variant = "outlined"
          />
        </div>
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
      <Button onClick={registerHandler} className={classes.signIn}> CREATE </Button>
    </div>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}  
    >
      <Register />
    </SnackbarProvider>
  );
}