import {BiSolidTimeFive} from 'react-icons/bi';
import {PiBasketFill} from 'react-icons/pi';
import {TbTruckDelivery} from 'react-icons/tb';
import {BsCurrencyPound} from 'react-icons/bs';
import {Perk} from './Perk';
import './Perks.scss';

export const Perks = () => {
  return (
    <>
      <h2 className='perk-title section-title'>Our Principles</h2>
      <div className='perks'>
      <Perk
        img={<BiSolidTimeFive  size={30} color={'#D1A476'}/>}
        title='Free returns'
        text='You can ask a refund any time'
      />
      <Perk
        img={<PiBasketFill  size={30} color={'#D1A476'}/>}
        title='Secure packaging'
        text='Your items will arrive on one piece'
      />
      <Perk
        img={<TbTruckDelivery  size={30} color={'#D1A476'}/>}
        title='Free shipping'
        text='Don`t pay extra fees for your delivery'
      />
      <Perk
        img={<BsCurrencyPound  size={30} color={'#D1A476'}/>}
        title='Best discounts'
        text='We give you the best price guarantee'
      />
    </div>
    </>
  );
};
