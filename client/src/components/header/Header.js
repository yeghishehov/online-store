import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavHeader from './navHeader/NavHeader';
import logo from '../../assets/logo/logo_home_360x.png';
import useStyles from './header.style';
import ROUTES from '../../globals/routes';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <NavHeader />

        <Link to={ROUTES.home}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={classes.icons}>
        <SearchIcon fontSize="inherit" />
        <Link to={ROUTES.authPage}>
          <PermIdentityIcon fontSize="inherit" />
        </Link>
        <ShoppingCartIcon fontSize="inherit" />
      </div>
    </div>
  );
}
