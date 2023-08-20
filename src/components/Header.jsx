import './Header.scss';
import classNames from 'classnames';
import {useState} from 'react';
import {BiSolidUser} from 'react-icons/bi';
import {PiBasketFill} from 'react-icons/pi';
import {HeaderButton} from './HeaderButton';
import {NavLink, useNavigate} from 'react-router-dom';
import { Login } from './Login';

export const Header = () => {
  const [isNavOpen, setIsNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const Changer = (event) => {
    setSearch(event.target.value);
    
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    
    navigate('/Shop');
  }
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
            <NavLink to={'./Mission'} onClick={() => setIsNav(false)}>
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
      {isLogin && (
            <Login setIsNav={setIsNav} setIsLogin={setIsLogin}/>
          )}
        <HeaderButton setIsNav={setIsNav} isNavOpen={isNavOpen} setIsLogin={setIsLogin}/>
        <form className='tablet-search' onSubmit={(e) => HandleSubmit(e)}>
          <button className='search' />
          <input
            type='text'
            className='header__input'
            placeholder='Search...'
            value={search}
            onChange={(e) => Changer(e)}
          />
        </form>
        <NavLink to={'/'} className='home' onClick={() => {
          setIsNav(false);
          setIsLogin(false);
        }}></NavLink>
        <div className='icons-wrap'>
          <NavLink to={'/MyAccount'}><BiSolidUser color='#49796B' size={'30px'} onMouseEnter={() => {
            setIsLogin(true);
            setIsNav(false);
          }}/></NavLink>
          <NavLink to={'/Cart'}><PiBasketFill color='#49796B' size={'30px'} /></NavLink>
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
            <NavLink to={'./Mission'} onClick={() => setIsNav(false)}>
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
