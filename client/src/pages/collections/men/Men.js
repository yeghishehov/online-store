import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getProducts from '../../../store/actions/products';
import { baseUrl } from '../../../utils/parameters';
import ROUTES from '../../../globals/routes';
import headerImg from '../../../assets/images/ezgif.com-webp-to-png.webp';
import classes from './style.module.css';

export default function Men() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(ROUTES.men));
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
      <div className={classes.headerTitle}>Men</div>
      <div className={classes.filters}>FILTERS COMPONENT</div>

      {dataByTypes.map((dataEl) => (
        <div key={dataEl.type}>
          <div className={classes.type}>{dataEl.type}</div>
          <div className={classes.cardsRoot}>
            {dataEl.data.map((product) => (
              <Link
                key={product._id}
                to={`${ROUTES.men}/${product.shoesName.replace(/\s/, '-')}--${product.color.replace(/\s/, '-')}`}
                className={classes.card}
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

  // return (
  //   <div>
  //     {dataByTypes.map((dataEl) => (
  //       <div>
  //         <h1>{dataEl.type}</h1>
  //         {dataEl.data.map((product) => (
  //           <div>
  //             <div>
  //               collection:
  //               {product.collectionName}
  //             </div>
  //             <div>
  //               color:
  //               {product.color}
  //             </div>
  //             <div>
  //               description:
  //               {product.description}
  //             </div>
  //             <div>
  //               price:
  //               {product.price}
  //             </div>
  //             <div>
  //               shoesName:
  //               {product.shoesName}
  //             </div>
  //             <div>
  //               sizes:
  //               {`${product.sizes}`}
  //             </div>
  //             <div>
  //               type:
  //               {product.type}
  //             </div>
  //             <div>
  //               {product.imagesSrc.map((src) => (
  //                 <img key={src} src={`${baseUrl}${src}`}
  //                   style={{ height: 30, width: 30 }} alt="" />
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
}
