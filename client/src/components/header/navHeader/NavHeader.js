import React from 'react';
import { Link } from 'react-router-dom';
import linksHeader from './linksHeader';
import useStyles from './navHeader.style';

export default function NavHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        linksHeader.map((link) => (
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
  );
}
