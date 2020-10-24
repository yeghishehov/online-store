import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../../store/actions/products';
import ROUTES from '../../../globals/routes';
import { baseUrl } from '../../../utils/parameters';
import classes from './style.module.css';

export default function Product({ location }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [selectedImg, setSelectedImg] = useState(0);

  const path = location.pathname.split('/');
  const collection = path[2];
  const shoesName = path[3].split('--')[0].replace(/-/, ' ');
  const color = path[3].split('--')[1].replace(/-/, ' ');

  useEffect(() => {
    dispatch(getProducts(ROUTES[collection]));
  }, [dispatch, collection]);

  const handleSelectImg = (idx) => {
    setSelectedImg(idx);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sameProduct = data.filter((el) => (
    el.shoesName === shoesName && el.color !== color
  ));

  const product = data.find((el) => (
    el.shoesName === shoesName && el.color === color
  ));

  return (
    product && sameProduct
      ? (
        <div className={classes.gridContainer}>
          <div className={classes.information}>
            <div>name</div>
            <div>price</div>
            <div>opisanie</div>
            <div>
              Available colors
              <div>images</div>
            </div>
            <div>
              <div>Size</div>
              <div>Guia de tallas</div>
            </div>
            <div>sizes select</div>
            <button>dobavit</button>

          </div>

          <div className={classes.imgFull}>
            <img src={`${baseUrl}${product.imagesSrc[selectedImg]}`} alt="img" className={classes.img} />
          </div>

          <div className={classes.imgs}>
            {product.imagesSrc.map((src, idx) => (
              <div
                key={src}
                className={classes.imgContainer}
                role="button"
                onClick={() => handleSelectImg(idx)}
                onKeyDown={() => {}}
                tabIndex={0}
              >
                <img src={`${baseUrl}${src}`} alt="img" className={classes.img} />
              </div>
            ))}
          </div>
        </div>
      ) : null
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
