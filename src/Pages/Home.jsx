import {useState} from 'react';
import {Banner} from '../components/Banner';
import {Popular} from '../components/Popular';
import {Perks} from '../components/Perks';
import {LearnMore} from '../components/LearnMore';
import {SubscribeForm} from '../components/SubscribeForm';
import {PopularProducts} from '../components/PopularProduct';
import {Adress} from '../components/Adress';
import '../components/Home.scss';

export const Home = () => {
  const [isError, setIsError] = useState(false);

  function Error(e) {
    e.preventDefault();
    setTimeout(() => {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }, 5000);
  }
  return (
    <>
      <Banner />
      <Popular />
      <Perks />
      <LearnMore />
      <SubscribeForm
        title='Subscribe for updates'
        buttonName='Subscribe'
        click={(e) => Error(e)}
      />
      {isError && (
        <div className='errorWrap'>
          <div className='error'>
            <img
              src='https://icon-library.com/images/image-error-icon/image-error-icon-17.jpg'
              alt=''
              className='ErrorImage'
            />
            <p className='errorP'>
              Opps smth went wrong... <br />
              Reach out to support
            </p>
          </div>
        </div>
      )}
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </>
  );
};
