import '../components/ProductCard.scss';
import {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

export const ProductCard = ({item}) => {
  const [itemM, setItem] = useState(item);
  return (
    <div className='ProductCard'>
      <img src={item.Images} alt='Error' className='ProductCard__image' />
      <div className='ProductCard__wrap'>
        <p className='ProductCard__price'>{item['Regular price']}$</p>
      </div > 
      <NavLink
        className='ProductCard__p'
        to={`/item/${item.ID}`}
        
      >
        {item.Name}
      </NavLink>
    </div>
  );
};
