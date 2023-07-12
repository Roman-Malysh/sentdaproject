import './Perk.scss';

export const Perk = ({img, title, text}) => {
  return (
    <div className='perk'>
      {img}
      <h2 className='perk__title'>{title}</h2>
      <p className='perk__text'>{text}</p>
    </div>
  );
}