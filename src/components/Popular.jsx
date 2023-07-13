import './Popular.scss';
import {CategoryCard} from './CategoryCard';

export const Popular = () => {
  const toolsHome1 = require('../icons/cards/Tools&Home1.jpeg');
  const sportOutdoors = require('../icons/cards/Sport&Outdors1.jpeg');
  const homeKitchen = require('../icons/cards/Home&Kitchen1.jpeg');
  const toysGames = require('../icons/cards/Toys & Games.webp');
  const clothes = require('../icons/cards/Clothes.png');
  const electronics = require('../icons/cards/Electronics.webp');
  const automotive = require('../icons/cards/Automotive.jpeg');

  return (
    <section className='popular'>
      <h2 className='popular__title section-title'>Popular categories</h2>
      <div className='grid-tablet grid-mobile'>
        <CategoryCard img={toolsHome1} text='Tools & Home' />
        <CategoryCard
          img={
            sportOutdoors
          }
          text='Sport & Outdoors'
        />
        <CategoryCard
          img={
            homeKitchen
          }
          text='Home & Kitchen'
        />
        <CategoryCard
          img={
            toysGames
          }
          text='Toys & Games'
        />
      </div>
      <div className='grid-bottom'>
        <CategoryCard
          img={
            clothes
          }
          text='Clothes'
          height='270px'
        />
        <CategoryCard
          img={
            electronics
          }
          text='Electronics'
        />
        <CategoryCard
          img={
            automotive
          }
          text='Automotive'
        />
      </div>
    </section>
  );
};
