import { Adress } from './components/Adress';
import { SubscribeForm } from './components/SubscribeForm';
import '../src/components/OurMission.scss';

export const AboutUs = () => {
  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>About Us</h1>
      <h3 className='ourMission__subtitle'>Honesty and trust</h3>
      <p>
        We are a young and developing trading company that specializes in the
        sale of home and leisure goods. The range of products we sell is
        constantly increasing, as well as the number of suppliers with whom we
        collaborate, therefore in our store, you can find the products you need
        of good quality and at an affordable price. We value your time,
        therefore you can buy the goods you need in our store, wholesale or
        retail, and we will arrange the delivery of goods to your home or work
        in a short time. We try to fill our range of products in such a way that
        you can buy a maximum of necessary goods when visiting our store and
        your time in our store was as comfortable and productive as possible for
        you. Our team makes a lot of effort to make every purchase in our store
        bring you joy in fulfilling your little desires. We sell at a fair price
        and provide a guarantee, as we believe that online shopping should be as
        convenient and safe as possible. And every time someone clicks “Buy”, we
        know that we are doing the right thing.
      </p>
      <h3 className='ourMission__subtitle'>Our goal is to be useful</h3>
      <p className='last'>
        We believe that things exist to make life easier, more pleasant, and
        kinder. Therefore, the search for the same thing should be fast,
        convenient, neat, and pleasant. We don’t just sell electronics or toys,
        we help you find what you need. In one place and without unnecessary
        worries, so that you do not spend your life searching, but just live
        happily. With smart search and honest service, we are making our
        customers’ lives a little better right now.
      </p>
      <SubscribeForm />
      <Adress />
    </div>
  );
};
