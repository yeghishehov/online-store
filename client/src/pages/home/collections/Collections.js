import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import handleScrollToTop from '../../../globals/scrollToTop'
import useStyles from './collections.style'

export default function Collections ({  title, text, route, viewItems }) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.typography} variant="h4" align='center'>
          {title}
        </Typography>
        <Typography variant="subtitle1" align='center' >
          {text}
        </Typography>
        <Typography variant="subtitle1" align='center' >
          <Link
              className={classes.link} 
              to={route}
              onClick={handleScrollToTop}
            >
              See all
            </Link>
        </Typography>
      </div>
    </div>
  )
}