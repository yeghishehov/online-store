import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { registrationRequest } from '../../API/authApi';
import ROUTES from '../../globals/routes';
import useStyles from './style';

function Register() {
  const classes = useStyles();
  const [isRegistered, setIsRegistered] = useState(false);
  const [form, setForm] = useState({
    email: '', password: '', firstName: '', lastName: '',
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async (key) => {
    if(!key.keyCode || key.keyCode === 13) {
      try {
        const response = await registrationRequest(form);

        setForm({
          email: '', password: '', firstName: '', lastName: '',
        });

        enqueueSnackbar(response.data.message, { variant: 'success' });
        setIsRegistered(true);
      } catch (error) {
        const { data } = error.response;

        const isErrorsExisted = 'errors' in data;

        if (isErrorsExisted) {
          const email = data.errors.find((err) => err.param === 'email');
          const password = data.errors.find((err) => err.param === 'password');
          const firstName = data.errors.find((err) => err.param === 'firstName');
          const lastNamer = data.errors.find((err) => err.param === 'lastNamer');

          if (email) enqueueSnackbar(email.msg, { variant: 'warning' });
          if (password) enqueueSnackbar(password.msg, { variant: 'warning' });
          if (firstName) enqueueSnackbar(firstName.msg, { variant: 'warning' });
          if (lastNamer) enqueueSnackbar(lastNamer.msg, { variant: 'warning' });

          enqueueSnackbar(data.message, { variant: 'warning' });
        } else {
          data
            ? enqueueSnackbar(data.message, { variant: 'warning' })
            : enqueueSnackbar(`${error}`, { variant: 'error' })
        }
      }
    }
  };

  if (isRegistered) return <Redirect to={ROUTES.login} />;

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3">
        Create Account
      </Typography>

      <div className={classes.input}>
        <div className={classes.textField}>
          First Name
          <TextField
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div className={classes.textField}>
          Last Name
          <TextField
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            variant="outlined"
            type="password"
          />
        </div>
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
            onKeyDown={(key) => registerHandler(key)}
          />
        </div>
      </div>
      <Button onClick={registerHandler} className={classes.signIn}> CREATE </Button>
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
      <Register />
    </SnackbarProvider>
  );
}
