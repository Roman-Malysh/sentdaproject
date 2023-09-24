import {useState} from 'react';

import '../components/Defaultsection.scss';

export const PromoCode = () => {
  const [input, setInput] = useState('');
  const [temporaryCode, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='basket-wrap couponeCode'>
      <div>
        <p className='couponeCode__title'>Have A Promotional Code?</p>
        <div className='Promocode'>
          <input
            type='text'
            className='Promocode__input'
            placeholder='Enter your code here...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
        className='Promocode__button'
        onClick={() => {
          setIsError(false);
          setCode(input);
          setInput('');
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
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
          `Apply coupone`
        )}
      </button>
        </div>
      </div>
      {isError && (
        <div className='ErrorCode'>
          <p className='ErrorCode__p'>
            {temporaryCode.length === 0
              ? 'Please enter a coupon code.'
              : `Coupon "${temporaryCode}" does not exist!`}
          </p>
        </div>
      )}
    </div>
  );
};
