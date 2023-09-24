import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {BiErrorCircle} from 'react-icons/bi';
import './SubscribeForm.scss';
import classNames from 'classnames';

export const LoginForm = ({title, buttonName}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const passPatern = pass.length > 5;
  const emailPattern = email.length > 6;

  function Submit(e) {
    e.preventDefault();
    setIsErrorLogin(false);
    setEmailError(false);
    setPassError(false);
    setIsLoading(true);
    if (!emailPattern) {
      setTimeout(() => {
        setIsLoading(false);
        setIsErrorLogin(true);
        setEmailError(true);
      },2000)
      return;
    }
    if (!passPatern) {
      setTimeout(() => {
        setIsLoading(false);
        setIsErrorLogin(true);
        setPassError(true);
      },2000)
      return;
    }
    setEmail('');
    setPass('');
    setTimeout(() => {
      setIsLoading(false);
      setIsErrorLogin(true);
      setTimeout(() => {
        setIsErrorLogin(false);
      },5000)
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
            className={classNames('input',{'inputError': emailError})}
            placeholder='Provide your email'
            value={pass}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            name='user_email'
            className={classNames('input',{'inputError': passError})}
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className={classNames("errorHidden",{'setIsErrorLogin': isErrorLogin})}>
          <div className='error'>
            <BiErrorCircle size={20} color="#F67280"/>
            <p className='errorM'>
              { emailError && ('Please provide correct email')}
              { passError && ('Your password has to be at least 6 digits')}
              { (!emailError && !passError) && ('No response from server')}
            </p>
          </div>
        </div>
          <button className='formButton logInFormButton'>
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
        <NavLink className='form__login-p'>
          Lost your password ?
        </NavLink>
        <NavLink className='form__login-p' to={'/MyAccountRegister'}>
          Don't have an account yet ?
        </NavLink>
      </form>
    </>
  );
};
