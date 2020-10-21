import React from 'react';
import NavFooter from './navFooter/NavFooter';
import Payments from './payments/Payments';
import Form from './form/Form';
import useStyles from './footer.style';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.title}>
          We are unisex, we are vegans,
          <br />
          We are #dothefuture
        </div>
        <Form />
        <div className={classes.info}>
          Currency EUR | English
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/logo-peta_200x.png" alt="" />
        </div>
      </div>
      <div>
        <NavFooter />
        <Payments />
        <div className={classes.address}>
          © Coming back from 2050, Muroexe, Paseo de los Melancólicos, 9. Madrid
        </div>
      </div>
    </div>
  );
}
