import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import handleScrollToTop from '../../../globals/scrollToTop'
import useStyles from './collections.style'

export default function Collections ({  title, text, route, viewItems }) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4" align='center'>
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

      <div className={classes.items}>
        {viewItems.map(item => (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://cdn.shopify.com/s/files/1/1241/4530/products/AtomOasisBlueRedPerfil_1024x1024@2x.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant='subtitle1' align='center' >
                  Atom Oasis Dark Blue
                </Typography>
                <hr className={classes.hr} />
                <div className={classes.typography} >
                  <Typography variant='body2' align='inherit' >
                    <s>€80.00</s>
                  </Typography>
                  <Typography variant='subtitle1' align='inherit' color='secondary' >
                    {`€55.00`}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  )
}