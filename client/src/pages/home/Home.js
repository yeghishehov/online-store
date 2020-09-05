import React from 'react'
import Slider from './slider/Slider'
import useStyles from './home.style'

export default function Home () {
  const classes = useStyles();
  
  return (
    <div>
      <Slider />
    </div>
  )
}