import { Adress } from './components/Adress';
import { SubscribeForm } from './components/SubscribeForm';
import '../src/components/OurMission.scss';

export const Shop = () => {
  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>Products</h1>
      <h3 className='ourMission__subtitle last'>Here's a list of all our products</h3>
      <SubscribeForm />
      <Adress />
    </div>
  );
}