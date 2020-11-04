import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getProducts from '../../../store/actions/products';
import { baseUrl } from '../../../utils/parameters';
import ROUTES from '../../../globals/routes';
import headerImg from '../../../assets/images/slider_complementos2_ebb3d74b-0bad-4fae-a027-196ee5b58d5f.webp';
import handleScrollToTop from '../../../globals/scrollToTop';
import classes from './style.module.css';

export default function Accesories() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(ROUTES.accesories));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const types = data.map((el) => el.type);
  const uniqueTypes = [...new Set(types)];
  const dataByTypes = uniqueTypes.reduce((acc, type) => {
    const filteredData = data.filter((el) => el.type === type);
    return [...acc, { type, data: filteredData }];
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headerImgContainer}>
        <img src={headerImg} alt="" className={classes.headerImg} />
      </div>
      <div className={classes.headerTitle}>Accesories</div>
      {/* <div className={classes.filters}>FILTERS COMPONENT</div> */}

      {dataByTypes.map((dataEl) => (
        <div key={dataEl.type}>
          <div className={classes.type}>{dataEl.type}</div>
          <div className={classes.cardsRoot}>
            {dataEl.data.map((product) => (
              <Link
                key={product._id}
                to={`${ROUTES[product.collectionName.toLowerCase()]}/${product.shoesName.replace(/\s/, '-')}--${product.color.replace(/\s/, '-')}`}
                className={classes.card}
                onClick={handleScrollToTop}
              > {console.log(product)}
                <div className={classes.imgContainer}>
                  <img src={`${baseUrl}${product.imagesSrc[0]}`} alt="img" className={classes.img} />
                </div>
                <div className={classes.name}>{`${product.shoesName} ${product.color}`}</div>
                <div className={classes.price}>{product.price}</div>
              </Link>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
