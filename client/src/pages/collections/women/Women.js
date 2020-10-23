import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../../store/actions/products';
import { baseUrl } from '../../../utils/parameters';
import ROUTES from '../../../globals/routes';

export default function Women() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts(ROUTES.women));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <div>
            collection:
            {product.collectionName}
          </div>
          <div>
            color:
            {product.color}
          </div>
          <div>
            description:
            {product.description}
          </div>
          <div>
            price:
            {product.price}
          </div>
          <div>
            shoesName:
            {product.shoesName}
          </div>
          <div>
            sizes:
            {`${product.sizes}`}
          </div>
          <div>
            type:
            {product.type}
          </div>
          <div>
            {product.imagesSrc.map((src) => (
              <img key={src} src={`${baseUrl}${src}`} style={{ height: 30, width: 30 }} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
