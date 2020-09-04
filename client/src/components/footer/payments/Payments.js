import React from 'react'
import { ReactComponent as AmazonIcon } from '../../../assets/icons/amazon.svg'
import { ReactComponent as AmExpIcon } from '../../../assets/icons/american-express.svg'
import { ReactComponent as ApplePayIcon } from '../../../assets/icons/apple-pay.svg'
import { ReactComponent as MasterIcon } from '../../../assets/icons/masercard.svg'
import { ReactComponent as PayPalIcon } from '../../../assets/icons/paypal.svg'
import { ReactComponent as SofortIcon } from '../../../assets/icons/sofort.svg'
import { ReactComponent as VisaIcon } from '../../../assets/icons/visa.svg'
import useStyles from './payments.style'

export default function Payments() {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <div className={classes.text}>
        Accepted payments
      </div>
      <div className={classes.icons}>
        <AmazonIcon className={classes.icon} />
        <AmExpIcon className={classes.icon} />
        <ApplePayIcon className={classes.icon} />
        <MasterIcon className={classes.icon} />
        <PayPalIcon className={classes.icon} />
        <SofortIcon className={classes.icon} />
        <VisaIcon className={classes.icon} />           
      </div>
    </div>
  )
}