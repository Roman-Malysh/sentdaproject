import './Header.scss';
import {useState} from 'react';
import {BiSolidUser} from 'react-icons/bi';
import {PiBasketFill} from 'react-icons/pi';
import {HeaderButton} from './HeaderButton';
import {NavLink, useNavigate} from 'react-router-dom';

export const Header = ({search, setSearch, keyWord, setKeyWord}) => {
  const [isNavOpen, setIsNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const Changer = (event) => {
    setSearch(event.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setKeyWord(search);
    setSearch('');
    navigate('/ShopSearch');
  };

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
        <HeaderButton
          setIsNav={setIsNav}
          isNavOpen={isNavOpen}
          setIsLogin={setIsLogin}
        />
        <form className='tablet-search' onSubmit={(e) => HandleSubmit(e)}>
          <button className='search' type='submit' />
          <input
            type='text'
            className='header__input'
            placeholder='Search...'
            value={search}
            onChange={(e) => Changer(e)}
          />
        </form>
        <NavLink
          to={'/'}
          className='home'
          onClick={() => {
            setIsNav(false);
            setIsLogin(false);
          }}
        ></NavLink>
        <div className='icons-wrap'>
          <NavLink to={'/MyAccount'}>
            <BiSolidUser
              color='#616683'
              size={'30px'}
            />
          </NavLink>
          <NavLink to={'/Cart'}>
            <PiBasketFill color='#616683' size={'30px'} />
          </NavLink>
        </div>
      </div>
      <form className='header__form' onSubmit={(e) => HandleSubmit(e)}>
        <button className='search' />
        <input
          type='text'
          className='header__input'
          placeholder='Search...'
          value={search}
          onChange={(e) => Changer(e)}
        />
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
