import './Footer.scss';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link to={'/Privacy'} className='li-a'>
        Privacy Policy
      </Link>
      <Link to={'/Shipping'} className='li-a'>
        Shipping Policy
      </Link>
      <Link to={'/Refund'} className='li-a'>
        Return And Refund Policy
      </Link>
      <Link to={'/InternationalShipping'} className='li-a'>
        International Shipping Policy
      </Link>
    </footer>
  );
};
