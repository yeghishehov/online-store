import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';
import Slider from './slider/Slider'
import Collections from './collections/Collections'
import useStyles from './home.style'

export default function Home () {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Slider />
      <Collections 
        title='Flat Rate' 
        text='Our best sellers at 45€' 
        route='/collections/flat-rate-46'
        viewItems
      />
    </div>
  )
}