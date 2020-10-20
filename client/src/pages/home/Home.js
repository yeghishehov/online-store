import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider/Slider';
import Collections from './collections/Collections';
import ROUTES from '../../globals/routes';
import useStyles from './home.style';

import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';

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
          We dress a generation of urban professionals, creatives and
          innovators that need functional yet modern products for their everyday lives.
        </div>
        <div className={classes.text2}>
          We have sold more than 250K pairs. We have customers in more
          than 51 countries. We sell in more tan 320 shops all around the globe.
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

      <Link to="pages/galeria" className={classes.imgContainer}>
        <div className={classes.imgWrap1}>
          <img className={classes.img} src={img1} alt="" />
        </div>
        <div className={classes.imgWrap2}>
          <img className={classes.img} src={img2} alt="" />
        </div>
        <div className={classes.imgWrap3}>
          <div className={classes.instashop}>INSTASHOP</div>
          <img className={classes.imgCenter} src={img3} alt="" />
        </div>
        <div className={classes.imgWrap4}>
          <img className={classes.img} src={img4} alt="" />
        </div>
        <div className={classes.imgWrap5}>
          <img className={classes.img} src={img5} alt="" />
        </div>
        <div className={classes.imgWrap6}>
          <img className={classes.img} src={img6}v alt="" />
        </div>
        <div className={classes.imgWrap7}>
          <img className={classes.img} src={img7} alt="" />
        </div>
        <div className={classes.imgWrap8}>
          <img className={classes.img} src={img8} alt="" />
        </div>
        <div className={classes.imgWrap9}>
          <img className={classes.img} src={img9} alt="" />
        </div>
      </Link>
    </div>
  );
}
