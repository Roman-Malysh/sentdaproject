import {Adress} from '../components/Adress';
import { LoginForm } from '../components/LoginForm';
import { PopularProducts } from '../components/PopularProduct';
import '../components/Defaultsection.scss';
import '../components/Item.scss';

export const MyAccount = () => {
  return (
    <div className='ourMission'>
    <h1 className='ourMission__title policy-title'>My Account</h1>
    <LoginForm title={'Log in'} buttonName='Login' />
    <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
  </div>
  );
}