import React from 'react'
import useStyles from './contact.style'

export default function Contact () {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}> CONTACT </h1><br/>
      If you have any question about us, our products or an order: <u>userexperience@muroexe.com</u>
      <br/><br/>
      If you’re a journalist or a blogger and you want to receive more information or any marketing and communication matter:
      <u> press@muroexe.com </u>
      <br/><br/>
      For distribution or sale of our products, please write to sales@muroexe.com
    </div>
  )
}