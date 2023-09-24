import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import {useState} from 'react';
import '../components/Defaultsection.scss';

export const ShippingPolicy = () => {
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
      <h1 className='ourMission__title policy-title'>Shipping Policy</h1>
      <p className='ourMission__p'>
        Atarrago Inc (“we” and “us”) is the operator of (https://atarrago.com/)
        (“Website”). By placing an order through this Website, you will be
        agreeing to the terms below. These terms are provided to ensure both
        parties are aware of and agree upon this arrangement to mutually protect
        and set expectations for our service.
      </p>
      <h1 className='ourMission__title'>General</h1>
      <p className='ourMission__p'>
        Subject to stock availability. We strive to maintain accurate stock
        counts on our website, but there may be occasional stock discrepancies.
        If we are unable to fulfill all items in your order due to such
        discrepancies, we will fulfill the available products and contact you to
        discuss whether you prefer to await restocking of the backordered item
        or if you would like a refund.
      </p>
      <h1 className='ourMission__title'>Shipping Costs</h1>
      <p className='ourMission__p'>
        Shipping costs are calculated during checkout based on the weight,
        dimensions, and destination of the items in the order. Payment for
        shipping will be collected with the purchase. The price displayed during
        checkout will be the final price for shipping cost to the customer.
      </p>
      <h1 className='ourMission__title'>Returns</h1>
      <h3>Return Due To Change Of Mind</h3>
      <p className='ourMission__p'>
        Atarrago Inc will accept returns due to a change of mind if a return
        request is received within 14 days of receiving the item. Items must be
        returned in their original packaging, unused, and in resellable
        condition. Return shipping will be at the customer's expense, and the
        customer is responsible for arranging their own shipping. Once returns
        are received and accepted, refunds will be processed as store credit for
        future purchases. You will be notified by email once the return process
        is completed. Please note that shipping costs are non-refundable.
      </p>
      <h3>Warranty Returns</h3>
      <p className='ourMission__p'>
        Atarrago Inc honors valid warranty claims when a claim is submitted
        within 90 days of receiving the items. Customers are responsible for
        pre-paying the return shipping, but we will reimburse you upon a
        successful warranty claim. Upon receiving items for a warranty claim, we
        aim to process the claim within 7 days. Once the warranty claim is
        confirmed, you may choose one of the following options: (a) Refund to
        your payment method (b) Refund as store credit (c) Replacement item sent
        (subject to stock availability)
      </p>
      <h1 className='ourMission__title'>Delivery Terms</h1>
      <h3>Transit Time Domestically</h3>
      <p className='ourMission__p'>
        In general, domestic shipments are in transit for 2 – 7 days.
      </p>
      <h3>Transit Time Internationally</h3>
      <p className='ourMission__p'>
        International orders generally take 4 – 22 days to arrive, depending on
        the selected courier. A more specific estimate can be provided during
        checkout when selecting your courier.
      </p>
      <h3>Dispatch Time</h3>
      <p className='ourMission__p'>
        Orders are typically dispatched within 2 business days of payment. Our
        warehouse operates on Monday – Friday during standard business hours,
        except on national holidays when the warehouse is closed. In such cases,
        we take steps to minimize shipment delays.
      </p>
      <h3 className='ourMission__h3'>Change Of Delivery Address</h3>
      <p className='ourMission__p'>
        For change of delivery address requests, we can accommodate changes
        before the order is dispatched.
      </p>
      <h3>P.O. Box Shipping</h3>
      <p className='ourMission__p'>
        We ship to P.O. box addresses using postal services only; courier
        services are not available for P.O. box addresses.
      </p>
      <h3>Military Address Shipping</h3>
      <p className='ourMission__p'>
        We can ship to military addresses using USPS, but courier services are
        not available for this option.
      </p>
      <h3>Items Out Of Stock</h3>
      <p className='ourMission__p'>
        If an item is out of stock, we will dispatch the in-stock items
        immediately and send the remaining items once they are back in stock.
      </p>
      <h3>Delivery Time Exceeded</h3>
      <p className='ourMission__p'>
        If the delivery time exceeds the estimated time frame, please contact us
        to initiate an investigation.
      </p>
      <h1 className='ourMission__title'>Duties & Taxes</h1>
      <h3>Sales Tax</h3>
      <p className='ourMission__p'>
        Sales tax is included in the price of goods displayed on the website.
      </p>
      <h3>Import Duties & Taxes</h3>
      <p className='ourMission__p'>
        For international shipments, import duties and taxes may apply upon
        arrival in the destination country. These costs vary by country, and we
        encourage you to be aware of potential costs before placing an order.
        Refusing to pay duties and taxes upon arrival will result in the goods
        being returned to Atarrago Inc at the customer's expense. A refund for
        the value of the goods will be issued, minus the return shipping cost.
        The initial shipping cost will not be refunded.
      </p>
      <h1 className='ourMission__title'>Cancellations</h1>
      <p className='ourMission__p'>
        Parcels are insured for loss and damage up to the value stated by the
        courier.
      </p>
      <h1 className='ourMission__title'>Insurance</h1>
      <p className='ourMission__p'>
        Cancellations can be requested before the order is dispatched. If an
        order has already been dispatched, please refer to our refund policy.
      </p>
      <h1 className='ourMission__title'>
        Process for Parcel Damaged In-Transit
      </h1>
      <p className='ourMission__p'>
        We will process a refund or replacement after the courier completes
        their investigation into the claim.
      </p>
      <h1 className='ourMission__title'>Process for Parcel Lost In-Transit</h1>
      <p className='ourMission__p last'>
        We will process a refund or replacement after the courier conducts an
        investigation and confirms the parcel is lost.
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
