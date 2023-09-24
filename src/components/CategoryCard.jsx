import './CategoryCard.scss';
import {Link, NavLink} from 'react-router-dom';

export const CategoryCard = ({img, text, alt, link}) => {
  return (
    <NavLink className='card' to={link}>
      <img className='card__image' src={img} alt={alt} />
      <p className='card__title' to={link}>{text}</p>
    </NavLink>
  );
}