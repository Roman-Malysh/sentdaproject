import './HeaderButton.scss';

export const HeaderButton = ({isNavOpen, setIsNav, setIsLogin}) => {
  return (
    <>
      <input
        type='checkbox'
        id='menu'
        className='hamburger-checkbox'
        onClick={() => {
          setIsNav(!isNavOpen);
          setIsLogin(false);
        }}
        checked={isNavOpen}
      />

      <div className='hamburger-icon'>
        <label htmlFor='menu' id='hamburger-label'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </>
  );
};