import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import '../components/Defaultsection.scss';

export const MyAccount = () => {
  return (
    <div className='ourMission'>
    <h1 className='ourMission__title'>My Account</h1>
    <SubscribeForm />
    <Adress />
  </div>
  );
}