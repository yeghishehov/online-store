import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button } from '@material-ui/core';
import ReactImageMagnify from 'react-image-magnify';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../../store/actions/products';
import {  getOrder, createOrder, removeOrder } from '../../../store/actions/orders';
import ROUTES from '../../../globals/routes';
import { baseUrl } from '../../../utils/parameters';
import error404 from '../../../assets/images/HTML-Error-Page.png';
import handleScrollToTop from '../../../globals/scrollToTop';
import classes from './style.module.css';

export default function Product({ location }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const { data: dataOrders, loading: orderLoading } = useSelector((state) => state.orders);
  const { data: user } = useSelector((state) => state.user)
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [isRedirect, setIsRedirect] = useState(false);

  const path = location.pathname.split('/');
  const collection = path[2];
  const shoesName = path[3].split('--')[0].replace(/-/, ' ');
  const color = path[3].split('--')[1].replace(/-/, ' ');

  useEffect(() => {
    dispatch(getProducts(ROUTES[collection]));
  }, [dispatch, collection]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sameProduct = data.filter((el) => (
    el.shoesName === shoesName
  ));

  const product = data.find((el) => (
    el.shoesName === shoesName && el.color === color
  ));

  const handleSelectImg = (idx) => {
    setSelectedImg(idx);
  };

  const handleSelectSize = (e) => {
    setSelectedSize(e.target.value)
  }

  const handleCreateOrder = async (e) => {
    e.currentTarget.disabled = true;

    const optionsOrder = {
      collectionName: product.collectionName,
      type: product.type,
      shoesName: product.shoesName,
      color: product.color,
      price: product.price,
      size: product.sizes[selectedSize],
      imagesSrc: product.imagesSrc[0],
      productPageSrc: location.pathname,
    }

    await dispatch(createOrder(optionsOrder))

    dispatch(getOrder())
  }

  const handleRemoveOrder = async (e) => {
    e.currentTarget.disabled = true;

    const selectedOrder = dataOrders.find(el => (
      el.collectionName === product.collectionName &&
      el.type === product.type &&
      el.shoesName === product.shoesName &&
      el.color === product.color &&
      el.size === product.sizes[selectedSize]
    ));

    await dispatch(removeOrder(selectedOrder._id))

    dispatch(getOrder())
  }

  const handleRedirect = () => {
    setIsRedirect(true);
  }

  const isAddedOrder = (product, dataOrders) => (
    dataOrders.some(el => (
      el.collectionName === product.collectionName &&
      el.type === product.type &&
      el.shoesName === product.shoesName &&
      el.color === product.color &&
      el.size === product.sizes[selectedSize]
    ))
  )

  if (isRedirect) return <Redirect to={ROUTES.login} />

  if(product) return (
        <div className={classes.gridContainer}>
          <div className={classes.imgFull}>
            <ReactImageMagnify
              {...{
                  smallImage: {
                      alt: 'Wristwatch by Versace',
                      isFluidWidth: true,
                      src: `${baseUrl}${product.imagesSrc[selectedImg]}`,
                      srcSet: `${baseUrl}${product.imagesSrc[selectedImg]}`,
                  },
                  largeImage: {
                      src: `${baseUrl}${product.imagesSrc[selectedImg]}`,
                      width: 1200,
                      height: 900
                  },
              }}
              {...{
                enlargedImagePosition: 'over'
              }}
          />
          </div>

          <div className={classes.imgs}>
            {product.imagesSrc.map((src, idx) => (
              <div
                key={src}
                className={idx === selectedImg ? classes.imgContainerFocus : classes.imgContainer}
                role="button"
                onClick={() => handleSelectImg(idx)}
                onKeyDown={() => {}}
                tabIndex={0}
              >
                <img src={`${baseUrl}${src}`} alt="img" className={classes.img} />
              </div>
            ))}
          </div>

          <div className={classes.information}>
            <div className={classes.title}>{`${product.shoesName} ${product.color}`}</div>
            <div className={classes.price}>€{product.price}</div>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.colorsContainer}>
              <div className={classes.colorsText}>Available colors</div>
              <div className={classes.sameImgs}>
                {sameProduct.map((el) => (
                  <Link
                    key={el._id}
                    to={`${ROUTES[collection]}/${el.shoesName.replace(/\s/, '-')}--${el.color.replace(/\s/, '-')}`}
                    className={el.color === color ? classes.sameImgContainerFocus : classes.sameImgContainer}
                    onClick={handleScrollToTop}
                  >
                    <img src={`${baseUrl}${el.imagesSrc[0]}`} alt="" className={classes.sameImg}/>
                  </Link>
                ))}
              </div>
            </div>
            {product.sizes.length > 0
              ? (<div className={classes.sizeContainer}>
                  <div className={classes.sizeText}>Size</div>
                  <Select
                    id='select'
                    className={classes.sizeSelect}
                    defaultValue={selectedSize}
                    onChange={handleSelectSize}
                  >
                    {product.sizes.map((size, idx) => (
                      <MenuItem key={size} value={idx}>{size}</MenuItem>
                    ))}
                  </Select>
                </div>
              ) : null
            }
            {isAddedOrder(product, dataOrders)
              ? (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleRemoveOrder}
                  disabled={orderLoading}
                > 
                  REMOVE ORDER
                </Button>
              ) : (user.email
                    ? (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleCreateOrder}
                        disabled={orderLoading}
                      > 
                        ADD TO CARD
                      </Button>
                    ) : (
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleRedirect}
                      > 
                        ADD TO CARD
                      </Button>
                    )
              )
            }
          </div>
        </div>
  );
  return (
    <img src={error404} alt="Error 404: page not found" className={classes.error404} />
  );
}

Product.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Product.defaultProps = {
  location: {
    pathname: '',
  },
};
