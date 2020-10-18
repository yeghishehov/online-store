import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/Slider';
import Collections from './collections/Collections';
import ROUTES from '../../globals/routes';
import useStyles from './home.style';

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider />

      <Collections
        title="Flat Rate"
        text="Our best sellers at 45€"
        route={ROUTES.flatRate46}
        viewItems={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      />
      <Collections
        title="Summer special edition"
        text="-15% light and breathable models."
        route={ROUTES.summerSpecialSelection}
        viewItems={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      />
      <Collections
        title="Outlet"
        text="Outlet > Our greatest hits at the best price"
        route={ROUTES.outlet}
        viewItems={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      />

      <div className={classes.collectionManWoman}>
        <div className={classes.linkContainer}>
          <Link to={ROUTES.men} className={classes.link}>
            Men
          </Link>
          <Link to={ROUTES.women} className={classes.link}>
            Women
          </Link>
        </div>
      </div>

      <div className={classes.heroInner} />

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
              <Link to={ROUTES.startup} className={classes.link}>
                View all
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.clothing}>
          <div className={classes.accessText}>
            Clothing
            <div>
              <Link to={ROUTES.womenTextile} className={classes.link}>
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.instashop}>
        <div className={classes.square}>
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=287&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F18110110657082281_0.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17855381918074934_0.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F18050767351210577_1.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17981804470295469_1.jpg" alt="" />
        </div>
        <div className={classes.grow}> </div>
        <div>
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=240&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17891566750532105_0.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=304&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17883818224495207_0.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=288&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F18084023557158795_0.jpg" alt="" />
          <img className={classes.img} src="https://m.photoslurp.com/i/fit?width=360&height=360&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17894157352447127_0.jpg" alt="" />
        </div>
      </div>

    </div>
  );
}
