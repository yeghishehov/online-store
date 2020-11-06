import React from 'react'
import useStyles from './abaut.style'

export default function About () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.</h1>
      <h1 className={classes.heading}> <b> History </b> </h1>
      We were born on September 1st 2013. Today we are team of more than 20 people in-house, but we also collaborate with agents, distributors photographers and ambassadors from all over the world.
      <br />
      <h1 className={classes.heading2}>Our values </h1>
      <br />
      Balanced between functionality, aesthetics and minimalism with a less is more approach to design. Less is more. User-centric in all design processes, experimentation, innovation, and future outlook. We manufacture in places with happy people in good working conditions  
      <br />
      <h1 className={classes.heading2}>We like</h1>
      <br />
      <div className={classes.end}>
        <h1 className={classes.heading2}>Some brand numbers so far </h1>
        <br />
        We have sold more than 250K pairs.
        <br />
        Customers in more than 51countries are wearing us.
        <br />
        We sell in more than 300 shops all around the globe. 
        <br /><br />
        <b> #DOTHEFUTURE </b>
        <br />
        OUR MATRA. OUR GUIDE. WHERE WE ARE GOING.
      </div>
    </div>
  )
}