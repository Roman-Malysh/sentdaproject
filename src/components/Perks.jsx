import {BiSolidTimeFive} from 'react-icons/bi';
import {PiBasketFill} from 'react-icons/pi';
import {TbTruckDelivery} from 'react-icons/tb';
import {BsCurrencyPound} from 'react-icons/bs';
import {Perk} from './Perk';
import './Perks.scss';

export const Perks = () => {
  const color = '#88829a';
  return (
    <>
      <h2 className='perk-title section-title'>Our Principles</h2>
      <div className='perks'>
      <Perk
        img={<BiSolidTimeFive  size={30} color={color}/>}
        title='Free returns'
        text='You can ask a refund any time'
      />
      <Perk
        img={<PiBasketFill  size={30} color={color}/>}
        title='Secure packaging'
        text='Your items will arrive on one piece'
      />
      <Perk
        img={<TbTruckDelivery  size={30} color={color}/>}
        title='Free shipping'
        text='Don`t pay extra fees for your delivery'
      />
      <Perk
        img={<BsCurrencyPound  size={30} color={color}/>}
        title='Best discounts'
        text='We give you the best price guarantee'
      />
    </div>
    </>
  );
};
