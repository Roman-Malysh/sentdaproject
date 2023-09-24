import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import json from '../products.json';

export const PopularProducts = () => {
  const [item, setItem] = useState(null);

  const temporaryItem = json.find((product) => Number(product.ID) === 8760);
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    const res = json.find((product) => Number(product.ID) === randomIntFromInterval(490,11000));
    if (res !== null || res !== undefined) {
      setItem(res);
    }
  },[])
  return (
    <>
    {item ? (
      <div>
      <h1 className='adresses__title' style={{textAlign: 'center', margin: '0'}}>Popular products</h1>
      <ProductCard  item={item}/>
      </div>
    ) : (
      <div>
      <h1 className='adresses__title' style={{textAlign: 'center', margin: '0'}}>Popular products</h1>
      <ProductCard  item={temporaryItem}/>
      </div>
    )}
    </>
  );
}