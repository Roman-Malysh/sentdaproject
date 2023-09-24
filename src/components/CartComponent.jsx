import './CartComponent.scss';
import {PiBasketDuotone} from 'react-icons/pi';
import {NavLink} from 'react-router-dom';

export const CartComponent = () => {
  return (
    <div className='cart-wrap'>
      <NavLink className='cart-link' to='/Shop'>
      <p className='cart-p'>Return to shop</p>
      <PiBasketDuotone color='#88829a' size={30}/>
      </NavLink>
    </div>
  )
}