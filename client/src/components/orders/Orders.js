import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {  getOrder, removeOrder } from '../../store/actions/orders';
import { baseUrl } from '../../utils/parameters';
import classes from './style.module.css';

export default function Orders () {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.orders);
    const [qualityLoading, setQualityLoading] = useState(false);
    const [quality, serQuality] = useState(
        data.reduce((acc, el) => ({...acc, [el._id] : 1}),{})
    );
    const total = data.reduce((acc, el) => acc + quality[el._id] * el.price, 0);
    
    useEffect(() => {
        const getQuality = async () => {
            await setQualityLoading(true)
            await serQuality(
                data.reduce((acc, el) => ({...acc, [el._id] : 1}),{})
            )
            await setQualityLoading(false)
        }
        getQuality();
    },[data])

    const handleChangeQuality = (e, id) => {
        serQuality({
            ...quality,
            [id]: e.target.value
        })
    }

    const handleRemoveOrder = async (e, id) => {
        e.currentTarget.disabled = true;
        await dispatch(removeOrder(id))    
        dispatch(getOrder())
      }

    if (qualityLoading) return <> Loading... </>

    if (data.length === 0) return (
        <div className={classes.rootEmpty}>
            <h1 className={classes.titleEmpty}>Your cart</h1>
            <p className={classes.emptyMessage}>Your cart is currently empty.</p>
        </div>
    )

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Your cart</h1>
            <table className={classes.table}> 
                <thead className={classes.thead}>
                    <tr className={classes.tr}>
                        <th className={classes.thLeft}>Product</th>
                        <th className={classes.thRight}>Price</th>
                        <th className={classes.thRight}>Quantity</th>
                        <th className={classes.thRight}>Total</th>
                    </tr>
                </thead>
                <tbody className={classes.tbody}>
                    {data.map(order => (
                        <tr className={classes.tr} key={order._id}>
                            <td className={classes.tdLeft}>
                                <div className={classes.product}>
                                    <div className={classes.imgWrapper}>
                                        <img className={classes.img} src={`${baseUrl}${order.imagesSrc}`} alt="img" />
                                    </div>
                                    <div className={classes.info}>
                                        <p className={classes.name}>{`${order.shoesName} ${order.color}`}</p>
                                        {order.size && <p className={classes.size}>{`Size: ${order.size}`}</p>}
                                        <Button 
                                            className={classes.remove}
                                            color="primary"
                                            onClick={(event) => handleRemoveOrder(event, order._id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </td>
                            <td className={classes.tdRight}>€{(+order.price).toFixed(2)}</td>
                            <td className={classes.tdRight}>
                                <input
                                    className={classes.input}
                                    type="number"
                                    min={1}
                                    value={quality[order._id]}
                                    onChange={(event) => handleChangeQuality(event, order._id)}
                                />
                            </td>
                            <td className={classes.tdRight}>€{(order.price * quality[order._id]).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={classes.cartSubtotal}>
              <span className={classes.subtotalText}>Subtotal</span>
              <span className={classes.subtotalPrice}>{`€${total.toFixed(2)} EUR`}</span>
            </div>
            <div className={classes.submit}>
                <Button variant="contained" color="primary" href="/payment">checkout</Button>
            </div>
        </div>
    );
}
