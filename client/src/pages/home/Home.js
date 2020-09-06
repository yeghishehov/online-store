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
        <div className={classes.linkContainer}>
          <Link to={ROUTES.men} className={classes.link} >
            Men
          </Link>
          <Link to={ROUTES.women} className={classes.link} >
            Women
          </Link>
        </div>
      </div>

      <div className={classes.heroInner}></div>

      <div className={classes.textContainer}>
        <div className={classes.text1}>
          We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.
        </div>
        <div className={classes.text2}>
          We have sold more than 250K pairs. We have customers in more than 51 countries. We sell in more tan 320 shops all around the globe.
          <div className={classes.hashtag}>#dothefuture</div>
        </div>
      </div>
          
      <div className={classes.collectionAccessories}>
        <div className={classes.accessories}>
          <div className={classes.accessText}>
            Accessories
            <div>
              <Link to={ROUTES.startup} className={classes.link} >
                View all
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.clothing}>
          <div className={classes.accessText}>
            Clothing
            <div>
              <Link to={ROUTES.womenTextile} className={classes.link} >
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.instashop}>

      </div>

    </div>
  )
}