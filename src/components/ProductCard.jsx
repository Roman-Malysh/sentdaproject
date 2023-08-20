import '../components/ProductCard.scss';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';

export const ProductCard = ({item, setId, selectedItemId}) => {
  const [itemM, setItem] = useState(item);
  return (
    <div className='ProductCard'>
      <img src={item.Images} alt='Error' className='ProductCard__image' />
      <div className='ProductCard__wrap'>
        <p className='ProductCard__price'>{item.RegularPrice}$</p>
      </div > 
      <NavLink
        className='ProductCard__p'
        to={{pathname: '/item'}}
        onClick={() => setId(item.ID)}
        
      >
        {item.Name}
      </NavLink>
    </div>
  );
};
