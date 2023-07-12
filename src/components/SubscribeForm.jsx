import React, {FormEvent, useRef, useState} from 'react';
import './SubscribeForm.scss';
import classNames from 'classnames';

export const SubscribeForm = ({isDarkMode}) => {
  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorText, setIsErrorText] = useState(false);
  const [buttonSuccess, setButton] = useState(false);
  const [buttonError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('send');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const form = useRef();

  const emailPattern = email.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setIsErrorName(true);
      setButton(false);
      setIsError(true);
      setTitle('Try again...');
      return;
    }
    if (!emailPattern) {
      setIsErrorEmail(true);
      setButton(false);
      setIsError(true);
      setTitle('Not really...');
      return;
    }
    if (textArea.trim().length < 4) {
      setIsErrorText(true);
      setButton(false);
      setIsError(true);
      setTitle('Fix it please...');
      return;
    }

    // if (form.current) {
    //   setButton(true);
    //   emailjs
    //     .sendForm(
    //       'service_xmipkxy',
    //       'template_tmwutqk',
    //       form.current,
    //       'XiUuNu90IycwcfOF3'
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    //   e.target.reset();
    // }
  };

  return (
    <form ref={form} onSubmit={(e) => sendEmail(e)} className='form'>
      <h2>Subscribe to our newsletter to receive updates.</h2>
      <div className='form-wrap'>
      <input
        type='text'
        name='user_name'
        className={classNames('input', {dark: isDarkMode})}
        placeholder='Enter your name'
        onChange={(e) => {
          setName(e.target.value);
          setIsErrorName(false);
          setButton(false);
          setIsError(false);
          setTitle('send');
        }}
      />
      <input
        type='text'
        name='user_email'
        className={classNames('input', {dark: isDarkMode})}
        placeholder='Enter your email'
        onChange={(e) => {
          setEmail(e.target.value);
          setIsErrorEmail(false);
          setButton(false);
          setIsError(false);
          setTitle('send');
        }}
      />
      <button className='wrap button'>Subscribe</button>
      </div>
      <p className='form__p'>We will only send you the good stuff, no spam. *</p>
    </form>
  );
};