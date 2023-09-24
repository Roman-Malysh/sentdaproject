import React, {FormEvent, useRef, useState} from 'react';
import {BiErrorCircle} from 'react-icons/bi';
import './SubscribeForm.scss';
import classNames from 'classnames';

export const SubscribeForm = ({
  title = 'Subscribe for updates',
  buttonName = 'Subscribe',
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const [name, setName] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [email, setEmail] = useState('');

  const namePattern = name.length > 1;
  const emailPattern = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  function Submit(e) {
    e.preventDefault();
    setIsErrorEmail(false);
    setIsErrorLogin(false);
    setIsErrorName(false);
    setIsLoading(true);
    if (!namePattern) {
      setTimeout(() => {
        setIsLoading(false);
        setIsErrorName(true);
        setIsErrorName(true);
      }, 2000);
      return;
    }
    if (!emailPattern) {
      setTimeout(() => {
        setIsLoading(false);
        setIsErrorEmail(true);
      }, 2000);
      return;
    }
    setEmail('');
    setName('');
    setTimeout(() => {
      setIsLoading(false);
      setIsErrorLogin(true);
      setTimeout(() => {
        setIsErrorLogin(false);
      }, 5000);
    }, 5000);
  }

  return (
    <>
      <form className='form' onSubmit={(e) => Submit(e)}>
        <h2 className='form__title'>{title}</h2>
        <div className='form-wrap'>
          <input
            type='text'
            name='user_name'
            className={classNames('input', {inputError: isErrorName})}
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            name='user_email'
            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
            className={classNames('input', {inputError: isErrorEmail})}
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className={classNames('errorHidden', {
              setIsErrorLogin: isErrorLogin,
            })}
          >
            <div className='error'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Green-checkmark.svg/1200px-Green-checkmark.svg.png'
                alt=''
                className='ErrorImage'
              />
              <p className='errorP'>You have subscribed to our newsletter</p>
            </div>
          </div>
          <div
            className={classNames('errorHidden', {
              'setIsErrorLogin': isErrorName,
            })}
          >
            <div className='error'>
              <BiErrorCircle  color='#F67280' size={20}/>
              <p className='errorM'>
              Enter your name
                </p>
            </div>
          </div>
          <div
            className={classNames('errorHidden', {
              'setIsErrorLogin': isErrorEmail,
            })}
          >
            <div className='error'>
              <BiErrorCircle  color='#F67280' size={20}/>
              <p className='errorM'>
              Enter correct email
                </p>
            </div>
          </div>
          <button className='formButton'>
            {isLoading ? (
              <div class='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              `${buttonName}`
            )}
          </button>
        </div>
        <p className='form__p'>
          We will only send you the good stuff, no spam. *
        </p>
      </form>
    </>
  );
};
