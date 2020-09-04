import React from 'react'
import useStyles from './legal.style'

export default function Legal () {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Legal</h1>
      <br/>
      If you need to request an exchange, please follow these steps. First change is free and you have 14 days to request it from the moment you receive the products.
      <br/>
      <p><strong>1</strong> - In the first place you should go to our exchange form you can find on this website right below. You will need the same email address you used for the purchase and your order number as well (you can find it on your confirmation email: e.g EU12345).</p>
      <br/>
      <p><strong>2</strong> - You have to prepare the products you want to exchange by placing them in the original box, including the delivery note in the inside. If missing, you can print out the order confirmation email. The delivery note is essential for us in order to be able to correctly register the products received. If they are somehow damaged, please notice that on certain occasions you may be only refunded the 50% of your purchase amount.</p>
      <br/>
      <p><strong>3</strong> - We have two different ways of exchange depending on your origin:</p>
      <br/>
      <p><strong>For EU-Countries:</strong> we request a pick-up at your address. The courier company in charge of it will be DHL. Notice that we will collect your products from the moment you get an email from us confirming that your pick-up has been processed. Once the products arrive in our warehouse, you will get a voucher with the same value you paid for the product you want to exchange. No matter further discounts or sale. You will get further instructions regarding the process via Email.</p>
      <br/>
      <p><strong>For Germany:</strong>For Germany: Please follow this instructions > https://muroexe.de/pages/umtausch?noredir </p>
      <br/>
      <p><strong>For Non-EU-Countries:</strong> If you want to EXCHANGE your order you do not have to fulfil the form. You may send the parcel on your own via Postal Service (basic rate), requesting a shipping costs receipt and send it to us via Email (userexperience@mureoxe.com). In this way, we will be able to register your request and refund up to 40$ as shipping costs.</p>
      <br/>
      Afterwards, we are going to send you a voucher with further instructions on how to use it so you may receive your right size or model. 
      <br/>
      The address of our warehouse is the following:
      <br/>
      SLS Logistics.
      <br/>
      Camino Seseña Nuevo S/N, nave 3. Polígono Industrial San Isidro.
      <br/>
      45223 Seseña, Toledo, Spain
      <br/>


      <p><span className={classes.redText}>IMPORTANT NOTE: </span> if you order includes several products, the exchange of just one product of all will be for free. If you want to exchange more than one product from the same order a 6€ extra cost will be applied to shipping costs. E.g. if you buy 4 products and want to exchange 3 of them, you will have a to pay an extra cost of 6 for each extra product, in total it would be 12€ for the two extra products. We will be sending you a payment order after proceeding with your exchange request so you can pay it via our website using your credit card or Pay Pal. </p>
    </div>
  )
}