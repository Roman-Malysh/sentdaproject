import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import {PopularProducts} from '../components/PopularProduct';
import {CartComponent} from '../components/CartComponent';
import {CartCard} from '../components/CartCard';
import {PromoCode} from '../components/PromoCode';
import {CardTotal} from '../components/CardTotal';
import '../components/Defaultsection.scss';
import {useEffect} from 'react';
import json from '../products.json';
import {useState} from 'react';
import classNames from 'classnames';

export const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setIsTotal] = useState(0);
  const [cardError, setCardError] = useState(false);

  const setTotal = () => {
    let res = 0;
    for (let i = 0; i < items.length; i++) {
      res += items[i]['Regular price'];
    }

    return res;
  };

  const itemsFilter = (id) => {
    const res = items.filter((item) => item.ID !== id);
    setItems(res);
  };

  useEffect(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const x = json.find(
        (el) => el.ID.toString() === localStorage.getItem(localStorage.key(i))
      );
      if (x) {
        items.push(x);
      }
    }
    setItems(items);
  }, []);

  useEffect(() => {
    setIsTotal(setTotal());
  }, [items]);

  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>Cart</h1>
      <div className='basket-wrap'>
        {items.length ? (
          <p className='basket-wrap__p'>
            You Have {items.length} Item In Your Cart
          </p>
        ) : (
          <h2 className='cart-title'>Your cart is currently empty.</h2>
        )}
        {items.map((item) => (
          <CartCard
            item={item}
            filter={itemsFilter}
            total={item['Regular price']}
          />
        ))}
      </div>
      {total > 0 && (
        <div className='cartTotalSubtotal-wrap'>
          <PromoCode />
          <CardTotal total={total} cardError={cardError} setCardError={setCardError}/>
        </div>
      )}
     <div className={classNames('Card-error', {'Card-error-hidden': !cardError})}>
       <p className='Card-error__p'>You have to be logged in to order</p>
     </div>
      <CartComponent />
      <SubscribeForm />
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </div>
  );
};
