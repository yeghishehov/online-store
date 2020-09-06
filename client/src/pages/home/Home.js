import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Slider from './slider/Slider'
import Collections from './collections/Collections'
import { ROUTES } from '../../globals/routes'
import useStyles from './home.style'

export default function Home () {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Slider />

      <Collections 
        title='Flat Rate' 
        text='Our best sellers at 45€' 
        route={ROUTES.flatRate46}
        viewItems={[0,1,2,3,4,5,6,7,8,1,2,2,2,2,2]}
      />
      <Collections 
        title='Summer special edition' 
        text='-15% light and breathable models.' 
        route={ROUTES.summerSpecialSelection}
        viewItems={[0,1,2,3,4,5,6,7,8,1,2,2,2,2,2]}
      />
      <Collections 
        title='Outlet' 
        text='Outlet > Our greatest hits at the best price' 
        route={ROUTES.outlet}
        viewItems={[0,1,2,3,4,5,6,7,8,1,2,2,2,2,2]}
      />

      <div className={classes.collectionManWoman}>
        <Link to={ROUTES.men} className={classes.link} >
          Men
        </Link>
        <div className={classes.space}></div>
        <Link to={ROUTES.women} className={classes.link} >
          Women
        </Link>
      </div>
    </div>
  )
}