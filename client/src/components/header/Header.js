import React from 'react';
import { useSelector } from 'react-redux';
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
  const { data } = useSelector((state) => state.orders);
  const { data: user } = useSelector((state) => state.user);
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
        <Link to={ROUTES.authPage} className={classes.link}>
          <PermIdentityIcon fontSize="inherit" />
          <div className={classes.name}>
            {user.firstName}
          </div>
        </Link>
        <Link to="#" className={classes.link}>
          <ShoppingCartIcon fontSize="inherit" />
          {data.length > 0
            ? <span className={classes.ordersCounts}>{data.length}</span>
            : null
          }          
        </Link>
      </div>
    </div>
  );
}
