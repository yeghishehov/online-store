import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import useStyles from './form.style'


export default function Form() {
  const classes = useStyles()

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        label="Email address" 
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
        }}
        InputProps={{
          classes: { root: classes.input },
          endAdornment: (
            <InputAdornment position='end'>
              <Button className={classes.button}>
                <img src="//cdn.shopify.com/s/files/1/1241/4530/t/11/assets/flecha_flecha_magica_flecha_23x.png" alt="" />
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.text}>
        By entering your email address, you agree to receive emails from Muroexe.
      </div> 
    </form>
  )
}