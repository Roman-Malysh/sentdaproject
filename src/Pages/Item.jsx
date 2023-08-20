import {useState, useEffect} from 'react';
import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import json from '../products.json';
import '../components/Item.scss';

export const Item = ({selectedItemId}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const product = json.find((product) => product.ID === selectedItemId);
    setItem(product);
  }, [selectedItemId]);

  const [item, setItem] = useState({});

  return (
    <div className='itemWrapperMain'>
      <h2 className='itemWrapperMain__h2'>{item.Name}</h2>
      <div className='itemWrap'>
        <img className='itemWrap__image' src={item.Images} alt='' />
        <div className='arrowWrap'>
          <h4 className='itemWrap__description'>Description</h4>
          <img
            src='https://static.thenounproject.com/png/860381-200.png'
            alt=''
            className='arrow'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <p className='itemWrap__p'>
            {item.Description !== '' ? item.Description : 'Just insane product'}
          </p>
        )}
        <div className='addtoCartWrap'>
          <p className='itemWrap__price'>{item.RegularPrice}$</p>
          <button
            className='itemWrap__button'
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setIsError(true);
              }, 2000);
              setTimeout(() => {
                setIsError(false);
              },7000)
            }}
          >
            {isLoading ? (
              <div class='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              'Add to cart'
            )}
          </button>
        </div>
      </div>
     {isError && (
       <div className='errorWrap'>
       <div className='error'>
       <img
           src='https://icon-library.com/images/image-error-icon/image-error-icon-17.jpg'
           alt=''
           className='ErrorImage'
         />
         <p className='errorP'>Opps smth went wrong... Contact support to order</p>
         
       </div>
     </div>
     )}
      <Adress />
      <SubscribeForm />
    </div>
  );
};
