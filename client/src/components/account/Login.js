import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import initUser from '../../store/actions/user';
import { useAuthContext } from '../../contexts/authContext';
import { loginRequest } from '../../API/authApi';
import ROUTES from '../../globals/routes';
import handleScrollToTop from '../../globals/scrollToTop'
import useStyles from './style';

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { login, isAuthorized } = useAuthContext();
  const [form, setForm] = useState({ email: '', password: '', remember: false});
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    setForm({ ...form, remember: e.target.checked });
  }

  const loginHandler = async (key) => {
    if(!key.keyCode || key.keyCode === 13) {
      try {
        const response = await loginRequest(form);
        login(response.data.token);
        dispatch(initUser(response.data.user));
      } catch (error) {
        const data = error.response && error.response.data;
        const isErrorsExisted = data && 'errors' in data;

        if (isErrorsExisted) {
          const email = data.errors.find((err) => err.param === 'email');
          const password = data.errors.find((err) => err.param === 'password');

          if (email) enqueueSnackbar(email.msg, { variant: 'warning' });
          if (password) enqueueSnackbar(password.msg, { variant: 'warning' });

          enqueueSnackbar(data.message, { variant: 'warning' });
        } else {
          data
            ? enqueueSnackbar(data.message, { variant: 'warning' })
            : enqueueSnackbar(`${error}`, { variant: 'error' })
        }
      }
    }
  };

  if (isAuthorized) return <Redirect to={ROUTES.authPage} />;

  return (
    <form className={classes.root}>
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
            type="password"
            // onBlur={loginHandler}
            onKeyDown={(key) => loginHandler(key)}
          />
        </div>
        <FormControlLabel
          className={classes.checkboxContainer}
          control={
            <Checkbox
              checked={form.remember}
              onChange={handleCheckBox}
              name="checkBox"
              color="primary"
            />
          }
          label="Remember me"
        />
      </div>
      <div className={classes.buttons}>
        <Link to="#" className={classes.link} onClick={handleScrollToTop}> Forgot your password? </Link>
        <Button onClick={loginHandler} className={classes.signIn}> SIGN IN </Button>
        <Link to={ROUTES.register} className={classes.link} onClick={handleScrollToTop}> Create account </Link>
      </div>
    </form>
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
