import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getProducts from '../../store/actions/products';
import { baseUrl } from '../../utils/parameters';
import ROUTES from '../../globals/routes';
import handleScrollToTop from '../../globals/scrollToTop';
import headerImgMen from '../../assets/images/ezgif.com-webp-to-png.webp';
import headerImgOutlet from '../../assets/images/AlphaCarbono_colores.webp';
import headerImgWomen from '../../assets/images/Landing_Mujer.webp';
import Filters from '../../components/filters/Filters';
import classes from './style.module.css';

export default function Collection({ collectionName }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [filtersInfo, setFiltersInfo] = useState({})
  
  useEffect(() => {
    dispatch(getProducts(ROUTES.collections[collectionName]));
  }, [dispatch, collectionName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const {Size, Price, Colors, Collection} =  filtersInfo;

  const dataBySize = Size && Size.length > 0
    ? data.filter(el => el.sizes.some(size => filtersInfo.Size.includes(size)))
    : data
  const dataByColors = Colors && Colors.length > 0
    ? dataBySize.filter(el => Colors.includes(el.color.split(" ").splice(-1).join()))
    : dataBySize
  const dataByPrice = Price && Price.length > 0
    ? dataByColors.filter(el => Price.some(price => +el.price < +price.split(' ')[2]  ) )
    : dataByColors
  const dataByCollection = Collection && Collection.length > 0
    ? dataByPrice.filter(el => Collection.includes(el.shoesName))
    : dataByPrice

  const types = dataByCollection.map((el) => el.type);
  const uniqueTypes = [...new Set(types)];
  const dataByTypes = uniqueTypes.reduce((acc, type) => {
    const filteredData = dataByCollection.filter((el) => el.type === type);
    return [...acc, { type, data: filteredData }];
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.headerImgContainer}>
        {collectionName === 'men' && <img src={headerImgMen} alt="" className={classes.headerImg} />}
        {collectionName === 'women' && <img src={headerImgWomen} alt="" className={classes.headerImg} />}
        {collectionName === 'outlet' && <img src={headerImgOutlet} alt="" className={classes.headerImg} />}
      </div>
      <div className={classes.headerTitle}>{collectionName}</div>
      <div className={classes.filters}>
        <Filters setFiltersInfo={setFiltersInfo} />
      </div>

      {dataByTypes.map((dataEl) => (
        <div key={dataEl.type}>
          <div className={classes.type}>{dataEl.type}</div>
          <div className={classes.cardsRoot}>
            {dataEl.data.map((product) => (
              <Link
                key={product._id}
                to={`${ROUTES.collections[collectionName]}/${product.shoesName.replace(/\s/, '-')}/${product.color.replace(/\s/, '-')}`}
                className={classes.card}
                onClick={handleScrollToTop}
              >
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

Collection.propTypes = {
  collectionName: PropTypes.string.isRequired,
};
