import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import {useState} from 'react';
import '../components/Defaultsection.scss';

export const InternationalPolicy = () => {
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
      <h1 className='ourMission__title policy-title'>International Shipping Policy</h1>
      <p className='ourMission__p'>
        We are not responsible for any customs restrictions, tariffs, or other
        regulations that may apply at Customs in any country. Any duties or
        taxes that may apply are your responsibility. If you have any questions,
        we encourage you to speak with your customs office, although we will
        ship any products you order to the address you provide.
      </p>
      <p className='ourMission__p'>
        The responsibility is yours to check with your country’s customs office
        to verify that your products can clear customs.
      </p>
      <p className='ourMission__p'>
        We will do our part and follow the exact directions in your order. We
        will ship your order to the exact address that you provide. Please keep
        in mind that once an order has shipped, we cannot change the address
        information on an international order, and errors here could cause a
        delivery delay or rejection. We will give you the best service and ship
        it very quickly at the rates that we have agreed to on our site – you
        pay actual shipping charges based on the weight of the package.
      </p>
      <p className='ourMission__p'>
        If for whatever reason the package is seized by Customs officials, we
        will not issue you a refund unless all products are returned to us in
        their original condition. The vast majority of orders make it through
        customs without any problems, and most orders that are stopped are
        automatically returned to us. You may be responsible for any return
        shipping charges, in accordance with your local regulations."
      </p>
      <p className='ourMission__p'>
        By ordering from atarrago.com, you are stating that you agree to the
        above disclaimer. While we rarely have problems with international
        shipments, if there is a problem with your order, we will work hard to
        find a solution as quickly as possible.
      </p>
      <p className='ourMission__p'>
        Note: International customers are responsible for ensuring that the
        products ordered can be lawfully imported to your country. When ordering
        from atarrago.com, the recipient is the importer of record and must
        comply with all laws and regulations of the destination country. Orders
        shipped to countries outside of the United States may be subject to
        import taxes and customs duties levied by the destination country once a
        shipment enters the country.
      </p>
      <p className='ourMission__p last'>
        From our experience, most foreign customers are not charged when they
        receive the shipment, however, any additional charges for customs
        clearance must be paid by the recipient. Customs policies vary widely
        from country to country and we recommend contacting your local customs
        office for further information. If you do get charged an additional fee,
        the carrier will expect payment at the time of delivery. If you refuse
        the shipment because of these charges, or if an order is rejected by
        customs due to item restrictions, or if the order is returned because
        the local post is unable to locate your address, we can refund you for
        the cost of the products (which does not include any shipping or return
        shipping fees) once the package is returned and processed by our
        warehouse. Please note that packages returned by customs can sometimes
        take a very long time to return, and in extreme circumstances can take
        as long as one year.
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
