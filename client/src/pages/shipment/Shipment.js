import React from 'react'
import useStyles from './shipment.style'

export default function Shipment () {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}> SHIPMENTS </h1>
      <p>
        <strong>
          Everything you need to know about the shipping, the delivery times and costs of your Muroexe products. 
        </strong>
      </p>
      <br />
      <br />
      <h2>BUYING PROCESS</h2>
      You can purchase your Muroexe products by clicking on the “buy” button. Now you will have the opportunity to choose between two different payment methods: PayPal, Amazon Pay, Sofort (Klarna) or Credit/Debit Card (Visa, MasterCard, etc.)
      <br />
      As soon as you have finished the purchase of your Muroexe products, we'll send you a confirmation email which includes all the details of your purchase and the tracking number. If you can't find this email in your inbox, don't forget to look in your spam-filter. If it's still not there, please write us to 
      <a href="mailto:userexperience@muroexe.com" aria-describedby="a11y-external-message">userexperience@muroexe.com</a>
      <br />
      <h2>Track your shipment</h2>
      <br />
      If you're based in Europe, you will receive an email from our courier service as soon as your parcel leaves our warehouse. If you have any questions or if you want to make a change please contact them directly.
      <br />
      If you're based in a Non-EU country, you will receive an email from our courier service as soon as your parcel leaves our warehouse. If you have any questions or if you want to make a change please contact them directly.
      <br />
      <br />
      <h2>Shipping costs</h2>
      <br />
      *The shipping costs may vary depending on the country you are placing your order from. Below you can see all the countries we send our awesome shoes to:
      <br /><br />
      <iframe title="asdqwe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0545664038323!2d44.51277731522518!3d40.18559907758818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDExJzA4LjEiTiA0NMKwMzAnNTMuOSJF!5e0!3m2!1sru!2s!4v1599257986335!5m2!1sru!2s" width="600" height="450" ></iframe>
      <br />
      <h2>Delivery times</h2>
      <ul>
        <li>
          If your Muroexe articles destination is an EU-Country: our delivery takes between 3 and 7 days.
        </li>
        <li>
          If your Muroexe articles destination is USA: our delivery takes between 2 and 5 days.          
        </li>
        <li>
          If your Muroexe articles destination is a Non-EU-Country: our delivery takes between 10 and 20 days.          
        </li>
        <li>
          If your Muroexe articles destination is Spain (mainland): our delivery takes between 2 and 5 working days. Please notice that our shipment company doesn’t make any deliveries during the weekend.          
        </li>
      </ul>
    </div>
  )
}