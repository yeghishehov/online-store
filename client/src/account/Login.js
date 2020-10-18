import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useAuthContext } from '../contexts/authContext';
import { loginRequest } from '../API/authApi';
import ROUTES from '../globals/routes';
import useStyles from './style';

function Login() {
  const classes = useStyles();
  const { login, isAuthorized } = useAuthContext();
  const [form, setForm] = useState({ email: '', password: '' });
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const response = await loginRequest(form);
      login(response.data.token, response.data.userId);
    } catch (error) {
      const { data } = error.response;
      const isErrorsExisted = 'errors' in data;

      if (isErrorsExisted) {
        const email = data.errors.find((err) => err.param === 'email');
        const password = data.errors.find((err) => err.param === 'password');

        if (email) enqueueSnackbar(email.msg, { variant: 'warning' });
        if (password) enqueueSnackbar(password.msg, { variant: 'warning' });

        enqueueSnackbar(data.message, { variant: 'warning' });
      } else {
        enqueueSnackbar(data.message, { variant: 'warning' });
      }
    }
  };

  if (isAuthorized) return <Redirect to={ROUTES.authPage} />;

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3">
        Login
      </Typography>

      <div className={classes.input}>
        <div className={classes.textField}>
          Email
          <TextField
            name="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div className={classes.textField}>
          Password
          <TextField
            name="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
      </div>
      <div className={classes.buttons}>
        <Link to="#" className={classes.link}> Forgot your password? </Link>
        <Button onClick={loginHandler} className={classes.signIn}> SIGN IN </Button>
        <Link to={ROUTES.register} className={classes.link}> Create account </Link>
      </div>
    </div>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Login />
    </SnackbarProvider>
  );
}
