import React from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../utils/parameters';

export default function Men() {
  const { data, loading, error } = useSelector((state) => state.products);

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
