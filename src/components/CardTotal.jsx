import {useState} from 'react';
import './Defaultsection.scss';
import './CardTotal.scss';

export const CardTotal = ({total, cardError, setCardError}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCheck, setIsLoadingCheck] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className='basket-wrap CardTotal'>
      <p className='CardTotal__h1'>Cart totals</p>
      <div className='CardTotal__wrapper'>
        <p className='CardTotal__p'>Subtotal</p>
        <p className='CardTotal__p'>{`$ ${total.toFixed(2)}`}</p>
      </div>
      <div className='CardTotal__wrapper'>
        <p className='CardTotal__p'>Total</p>
        <p className='CardTotal__p'>{`$ ${total.toFixed(2)}`}</p>
      </div>
      <button
        className='CardTotal__button'
        onClick={() => {
          setIsLoadingCheck(true);
          setCardError(false);
          setTimeout(() => {
            setIsLoadingCheck(false);
            setCardError(true);
          }, 2000);
        }}
      >
        {isLoadingCheck ? (
          <div class='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          `Proceed to checkout`
        )}
      </button>
      <div className=''></div>
    </div>
  );
};
