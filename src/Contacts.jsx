import { Adress } from './components/Adress';
import { SubscribeForm } from './components/SubscribeForm';
import '../src/components/OurMission.scss';

export const Contacts = () => {
  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>Let's stay in touch</h1>
      <div className="touch"></div>
      <SubscribeForm />
      <Adress />
    </div>
  );
}