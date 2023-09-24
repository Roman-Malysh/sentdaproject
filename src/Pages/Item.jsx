import {useState, useEffect} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import {NavLink, useNavigate} from 'react-router-dom';
import {GiCheckMark} from 'react-icons/gi';
import {MdShoppingCartCheckout} from 'react-icons/md';
import json from '../products.json';
import '../components/Item.scss';

export const Item = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const product = json.find((product) => product.ID === Number(id));
    setItem(product);
  }, [id]);

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
    <>
      {item && (
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
                {item.Description.replace(/[^>]*>/g, '').length > 12
                  ? item.Description.replace(/[^>]*>/g, '')
                  : 'The best product in the category. Satisfies all your needs at the best price on the market'}
              </p>
            )}
            <div className='additionalInfo'>
              <h2 className='additionalInfo__description'>
                Additional information
              </h2>
              <p className='additionalInfo__p'>
                Weight: {item['Weight (lbs)']} lbs
              </p>
              <p className='additionalInfo__p'>SKU: {item.SKU}</p>
            </div>
            <div className='addtoCartWrap'>
              <p className='itemWrap__price'>{item['Regular price']}$</p>
              <button
                className='itemWrap__button'
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    localStorage.setItem(item.Name, item.ID);
                    setIsError(true);
                  }, 2000);
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
        </div>
      )}
      {isError && (
        <div className='errorWrap orderError'>
          <div className='error'>
            <GiCheckMark color='#568203' />
            <p className='errorP'>
              {item.Name} has been added to your cart.
            </p>
            <p className='errorP' onClick={() => {
              navigate('/Cart')
            }}>
            <MdShoppingCartCheckout color='#568203' size={20}/>
            View cart
            </p>
          </div>
        </div>
      )}

      <SubscribeForm
        title='Subscribe for our updates'
        buttonName='Subscribe'
        click={(e) => Subscribe(e)}
      />
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </>
  );
};
