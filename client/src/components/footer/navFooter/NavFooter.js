import React from 'react';
import { Link } from 'react-router-dom';
import { linksOrder, linksAs } from './linksFooter';
import handleScrollToTop from '../../../globals/scrollToTop';
import useStyles from './navFooter.style';

export default function NavFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <div className={classes.text}>
          All about your order
        </div>
        {
          linksOrder.map((link) => (
            <Link
              className={classes.link}
              key={link.text}
              to={link.route}
              onClick={handleScrollToTop}
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
          linksAs.map((link) => (
            <Link
              className={classes.link}
              key={link.text}
              to={link.route}
              onClick={handleScrollToTop}
            >
              {link.text}
            </Link>
          ))
        }
      </div>
    </div>
  );
}
