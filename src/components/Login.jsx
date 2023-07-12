import './Login.scss';
import {NavLink} from 'react-router-dom';

export const Login = ({setIsNav, setIsLogin}) => {
  return (
    <form action='' className='loginForm' onMouseLeave={() => setIsLogin(false)}>
      <div className='input-wrap'>
      <input type='text' className='loginForm__input' />
      <input type='password' className='loginForm__input' />
      <div>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>Remember me</label>
      </div>
      </div>
      <div className='login-wrap'>
      <button className='loginForm__login'>Login</button>
      <NavLink to={'./MyAccount'} onClick={() => setIsLogin(false)} className='loginForm__register'>Register</NavLink>
      </div>
    </form>
  );
};
