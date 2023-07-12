import './Banner.scss';
import {NavLink} from 'react-router-dom';

export const Banner = () => {
  return (
    <div className='banner'>
      <h2 className='banner__title'>Your Wholesale Distributor for Consumer Products</h2>
      <NavLink className='wrap' to={'/Shop'}>
        See all our products
      </NavLink>
    </div>
  )
}