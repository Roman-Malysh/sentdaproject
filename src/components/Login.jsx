import './Login.scss';
import {NavLink} from 'react-router-dom';

export const Login = ({setIsNav, setIsLogin}) => {
  return (
    <form action='' className='loginForm' onMouseLeave={() => setIsLogin(false)}>
      <h2 className='loginForm__title'>Welcome</h2>
      <div className='input-wrap'>
      <input type='text' className='loginForm__input' placeholder='Enter your name'/>
      <input type='password' className='loginForm__input' placeholder='Enter your email'/>
      <div>
      </div>
      </div>
      <div className='login-wrap'>
      <button className='loginForm__login'>Login</button>
      <div className="login-wrap2">
      <p className='loginForm__p'>Not registered?</p>
      <NavLink to={'./MyAccount'} onClick={() => setIsLogin(false)} className='loginForm__register'>Create an account</NavLink>
      </div>
      </div>
    </form>
  );
};
