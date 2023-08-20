import './CategoryCard.scss';
import {Link, NavLink} from 'react-router-dom';

export const CategoryCard = ({img, text, alt, link}) => {
  return (
    <div className='card'>
      <img className='card__image' src={img} alt={alt} />
      <NavLink className='card__title' to={link}>{text}</NavLink>
    </div>
  );
}