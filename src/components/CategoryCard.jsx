import './CategoryCard.scss';

export const CategoryCard = ({img, text, height}) => {
  return (
    <div className='card' style={{height: `${height}`}}>
      <img className='card__image' src={img} alt="image" />
      <p className='card__title'>{text}</p>
    </div>
  );
}