import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/cart/cartSlice";

export default function ProductSizeList({ product, activeItemID, actions }) {
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    //console.log('handleAddToCart', size, count);
    const { id, title, price } = product;
    dispatch(addToCart({ id, title, price, size, count }));
  };

  const handleChangeCount = (newCount) => {
    //console.log('handleChangeCount', newCount);
    if (size && newCount >= 1 && newCount <= 10) {
      setCount(newCount);
    };
  };

  const handleSelectSize = (newSize) => {
    //console.log('handleSelectSize', newSize);
    setSize(newSize);
    setCount(1);
  };

  if (product.sizes === null) return;
  const availableSizes = product.sizes.filter(x => (x.available));
  if (availableSizes.length === 0) return <p>Нет в наличии</p>;

  return (
    <>
      <div className="text-center">
        <p>Размеры в наличии:&nbsp;
          {availableSizes.map(item => (
            <span
              key={ item.size }
              className={ classNames("catalog-item-size", { "selected": size === item.size}) }
              onClick = { () => handleSelectSize(item.size) }
              >
              { item.size }
            </span>
          ))}
        </p>
        { size &&
        <p>Количество:
          <span className="btn-group btn-group-sm pl-2">
            <button className="btn btn-secondary" onClick={() => handleChangeCount(count-1)} >-</button>
            <span className="btn btn-outline-primary">{count}</span>
            <button className="btn btn-secondary" onClick={() => handleChangeCount(count+1)}>+</button>
          </span>
        </p>
        }
      </div>
      <button
        className="btn btn-danger btn-block btn-lg"
        onClick={ handleAddToCart }
        disabled={ size == null }
        >
        В корзину
      </button>
    </>
  );
};
