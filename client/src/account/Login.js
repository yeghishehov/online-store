import React from 'react'
import useStyles from './style'
import { Typography, TextField } from '@material-ui/core';

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
          <TextField variant="outlined" />
        </div>
        <div className={classes.textField}>
          Password
          <TextField variant="outlined" />
        </div>
      </div>
    </div>
  )
}