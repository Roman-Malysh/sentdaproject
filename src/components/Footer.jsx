import './Footer.scss';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link to={'/PrivacyPolicy'} className='li-a'>
        Privacy Policy
      </Link>
      <Link to={'/ShippingPolicy'} className='li-a'>
        Shipping Policy
      </Link>
      <Link to={'/ReturnPolicy'} className='li-a'>
        Return And Refund Policy
      </Link>
      <Link to={'/InternationalPolicy'} className='li-a'>
        International Shipping Policy
      </Link>
    </footer>
  );
};
