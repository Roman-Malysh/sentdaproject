import {Adress} from './components/Adress';
import {SubscribeForm} from './components/SubscribeForm';
import '../src/components/OurMission.scss';

export const Cart = () => {
  return (
    <div className='ourMission'>
    <h1 className='ourMission__title'>Cart</h1>
    <SubscribeForm />
    <Adress />
  </div>
  );
}