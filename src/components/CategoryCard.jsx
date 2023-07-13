import './CategoryCard.scss';

export const CategoryCard = ({img, text, alt}) => {
  return (
    <div className='card'>
      <img className='card__image' src={img} alt={alt} />
      <p className='card__title'>{text}</p>
    </div>
  );
}