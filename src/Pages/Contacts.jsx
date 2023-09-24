import { Adress } from '../components/Adress';
import { SubscribeForm } from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import '../components/Defaultsection.scss';

export const Contacts = () => {
  return (
    <div className='ourMission'>
      <h1 className='ourMission__title policy-title'>Let's stay in touch</h1>
      {/* <div className="touch"></div> */}
      <SubscribeForm />
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </div>
  );
}