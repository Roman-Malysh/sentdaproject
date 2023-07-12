import './Header.scss';
import classNames from 'classnames';
import {useState} from 'react';
import {BiSolidUser} from 'react-icons/bi';
import {PiBasketFill} from 'react-icons/pi';
import {HeaderButton} from './HeaderButton';
import {NavLink} from 'react-router-dom';
import { Login } from './Login';

export const Header = () => {
  const [isNavOpen, setIsNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header className='header'>
      <nav className={isNavOpen ? 'isNavOpen' : 'nav'}>
        <ul className='ul'>
          <li className='li-tablet'>
            <NavLink to={'/'} onClick={() => setIsNav(false)}>
              Home
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Mission.jsx'} onClick={() => setIsNav(false)}>
              Our Mission
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Shop'} onClick={() => setIsNav(false)}>
              Shop
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./About'} onClick={() => setIsNav(false)}>
              About Us
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Contacts'} onClick={() => setIsNav(false)}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='header__wrap-top'>
        <HeaderButton setIsNav={setIsNav} isNavOpen={isNavOpen} setIsLogin={setIsLogin}/>
        <form className='tablet-search'>
          <button className='search' />
          <input
            type='text'
            className='header__input'
            placeholder='Search...'
          />
        </form>
        <NavLink to={'/'} className='home' onClick={() => {
          setIsNav(false);
          setIsLogin(false);
        }}></NavLink>
        <div className='icons-wrap'>
          <NavLink to={'/MyAccount'}><BiSolidUser color='#D1A476' size={'30px'} onMouseEnter={() => {
            setIsLogin(true);
            setIsNav(false);
          }}/></NavLink>
          <NavLink to={'/Cart'}><PiBasketFill color='#D1A476' size={'30px'} /></NavLink>
          {isLogin && (
            <Login setIsNav={setIsNav} setIsLogin={setIsLogin}/>
          )}
        </div>
      </div>
      <form className='header__form'>
        <button className='search' />
        <input type='text' className='header__input' placeholder='Search...' />
      </form>
      <ul className='ul-tablet'>
      <li className='li-tablet'>
            <NavLink to={'/'} onClick={() => setIsNav(false)}>
              Home
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Mission.jsx'} onClick={() => setIsNav(false)}>
              Our Mission
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Shop'} onClick={() => setIsNav(false)}>
              Shop
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./About'} onClick={() => setIsNav(false)}>
              About Us
            </NavLink>
          </li>
          <li className='li-tablet'>
            <NavLink to={'./Contacts'} onClick={() => setIsNav(false)}>
              Contacts
            </NavLink>
          </li>
      </ul>
    </header>
  );
};
