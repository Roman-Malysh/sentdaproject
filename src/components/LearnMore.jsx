import './LearnMore.scss';
import {NavLink} from 'react-router-dom';

export const LearnMore = ({state, setState}) => {
  return (
    <section className='learnmore'>
      <h2 className='section-title'>Our goal is to be useful</h2>
      <p>
        We value your time, therefore you can buy the goods you need in our
        store, wholesale or retail, and we will arrange the delivery of goods to
        your home or work in a short time.
      </p>
      <NavLink className='wrap' to={'/Shop'}>
        See all our products
      </NavLink>
    </section>
  );
};
