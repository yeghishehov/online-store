import React from 'react'
import { Link } from 'react-router-dom'
import { allAboutYourOrder, allAboutUs } from './linksFooter'
import useStyles from './navFooter.style'

export default function NavFooter(){
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <div className={classes.links}>
        <div className={classes.text}>
          All about your order
        </div>
        {
          allAboutYourOrder.map(link => (
            <Link
              className={classes.link} 
              key={link.text}
              to={link.route}
            >
              {link.text}
            </Link>
          ))
        }
      </div>

      <div className={classes.links}>
        <div className={classes.text}>
          All about us :)
        </div>
        {
          allAboutUs.map(link => (
          <Link
            className={classes.link} 
            key={link.text}
            to={link.route}
          >
            {link.text}
          </Link>
        ))
        }
      </div>
    </div>
  )
}