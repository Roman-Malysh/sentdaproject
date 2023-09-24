import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import {useState} from 'react';
import '../components/Defaultsection.scss';

export const ReturnPolicy = () => {
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  function Subscribe(e) {
    e.preventDefault();
    setTimeout(() => {
      setIsErrorLogin(true);
      setTimeout(() => {
        setIsErrorLogin(false);
      }, 5000);
    }, 5000);
  }

  return (
    <div className='ourMission'>
      <h1 className='ourMission__title policy-title'>Return and Refund Policy</h1>
      <p className='ourMission__p'>
        Thank you for shopping at Atarrago Inc. If, for any reason, you are not
        completely satisfied with a purchase, we invite you to review our policy
        on refunds and returns. This Return and Refund Policy has been created
        with the help of the Return and Refund Policy Generator.
      </p>
      <p className='ourMission__p'>
        The following terms are applicable for any products that you purchased
        with us.
      </p>
      <h1 className='ourMission__title'>Interpretation and Definitions</h1>
      <h3>Interpretation</h3>
      <p className='ourMission__p'>
        Words with initial capitalization have meanings defined under the
        following conditions. The following definitions apply whether they
        appear in singular or plural form.
      </p>
      <h1 className='ourMission__title'>Definitions</h1>
      <p className='ourMission__p'>
        For the purposes of this Return and Refund Policy: Company (referred to
        as either “the Company,” “we,” “us,” or “our” in this Agreement) refers
        to Atarrago Inc, 7901 4th St N Suite 300, St. Petersburg, FL 33702.
        Goods refer to the items offered for sale on the Service. Orders mean a
        request by you to purchase Goods from us. Service refers to the Website.
        Website refers to Atarrago Inc, accessible from https://atarrago.com/
        You means the individual accessing or using the Service, or the company,
        or other legal entity on behalf of which such individual is accessing or
        using the Service, as applicable.
      </p>
      <h1 className='ourMission__title'>Your Order Cancellation Rights</h1>
      <h3>Return Due To Change Of Mind</h3>
      <p className='ourMission__p'>
        You are entitled to cancel your Order within 14 days without giving any
        reason for doing so. The deadline for canceling an Order is 14 days from
        the date on which you received the Goods or on which a third party you
        have appointed, who is not the carrier, takes possession of the product
        delivered. In order to exercise your right of cancellation, you must
        inform us of your decision by means of a clear statement. You can inform
        us of your decision by: By email: [email address] We will reimburse you
        no later than 14 days from the day on which we receive the returned
        Goods. We will use the same means of payment as you used for the Order,
        and you will not incur any fees for such reimbursement.
      </p>
      <h1 className='ourMission__title'>Conditions for Returns</h1>
      <p className='ourMission__p'>
        In order for the Goods to be eligible for a return, please make sure
        that: The Goods were purchased in the last 14 days. The Goods are in the
        original packaging. The following Goods cannot be returned: The supply
        of Goods made to your specifications or clearly personalized. The supply
        of Goods which according to their nature are not suitable to be
        returned, deteriorate rapidly or where the date of expiry is over. The
        supply of Goods which are not suitable for return due to health
        protection or hygiene reasons and were unsealed after delivery. The
        supply of Goods which are, after delivery, according to their nature,
        inseparably mixed with other items. We reserve the right to refuse
        returns of any merchandise that does not meet the above return
        conditions in our sole discretion. Only regular priced Goods may be
        refunded. Unfortunately, Goods on sale cannot be refunded. This
        exclusion may not apply to you if it is not permitted by applicable law.
      </p>
      <h1 className='ourMission__title'>Returning Goods</h1>
      <p className='ourMission__p'>
        You are responsible for the cost and risk of returning the Goods to us.
        You should send the Goods to the following address: 7901 4th St N Suite
        300 St. Petersburg, FL 33702 We cannot be held responsible for Goods
        damaged or lost in return shipment. Therefore, we recommend using an
        insured and trackable mail service. We are unable to issue a refund
        without actual receipt of the Goods or proof of received return
        delivery.
      </p>
      <h3>Gifts</h3>
      <p className='ourMission__p last'>
        If the Goods were marked as a gift when purchased and then shipped
        directly to you, you’ll receive a gift credit for the value of your
        return. Once the returned product is received, a gift certificate will
        be mailed to you. If the Goods weren’t marked as a gift when purchased,
        or the gift giver had the Order shipped to themselves to give it to you
        later, we will send the refund to the gift giver.
      </p>
      <SubscribeForm click={(e) => Subscribe(e)} />
      {isErrorLogin && (
        <div className='errorWrap orderError'>
          <div className='error'>
            <img
              src='https://icon-library.com/images/image-error-icon/image-error-icon-17.jpg'
              alt=''
              className='ErrorImage'
            />
            <p className='errorP'>Opps smth went wrong... Contact support</p>
          </div>
        </div>
      )}
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </div>
  );
};
