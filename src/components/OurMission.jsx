import {SubscribeForm} from './SubscribeForm.jsx';
import './Defaultsection.scss';
import { Adress } from './Adress.jsx';

export const OurMission = () => {
  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>Our Mission</h1>
      <p>The philosophy of our company is based on such key values as:</p>
      <h3 className='ourMission__subtitle'>Honesty and trust</h3>
      <p>
        The key point in the development of our company is the aspect of our
        customers ‘ trust in us. We try to train our employees in such a way
        that they build trusting relationships with our customers. Loyalty to
        our commitments, sincerity to others and ourselves – these are the
        requirements that we set at the heart of our company’s policy. We
        believe that trusting and open relationships are exactly the principle
        that helps to build the best service for customers!
      </p>
      <h3 className='ourMission__subtitle'>Reliability</h3>
      <p>
        We protect every purchase. Working only with trusted suppliers, we
        guarantee the quality and safety of our products. We care about the
        quality of our service so that customers can get a competent answer to
        any question they are interested in about our product or service.
      </p>
      <h3 className='ourMission__subtitle'>Collaboration</h3>
      <p>
        We take a very responsible approach to the selection of suppliers and
        business partners. Our company has several fundamental conditions that,
        in our opinion, are laid down based on productive cooperation: mutual
        interests, full mutual understanding, interest in the result, and an
        active position. If you, as our potential partner, have an official
        representative office, product guarantees, or necessary certificates, as
        well as a positive image, then we will be happy to conclude profitable
        deals with you. Our company is always open to partnership, as expansion
        and development is the strategic goal of our company. We believe that
        unity makes it easier to achieve common goals, improves the quality of
        work, and supports each other in difficult times.
      </p>
      <h3 className='ourMission__subtitle'>Coherence</h3>
      <p className='last'>
        Every day we try to organize the work of our team in such a way that it
        is easy and simple for our customers to find and purchase the necessary
        goods. We do not just provide you with a service by selling household
        goods or a toy for your favorite dog – we help you easily and simply
        purchase what you have been looking for without any extra hassle. Thanks
        to our service, a large selection of products with affordable prices, we
        seek to save our customers’ time and make their lives better today.
        Sincerely, the team.
      </p>
      <SubscribeForm />
      <Adress />
    </div>
  );
};
