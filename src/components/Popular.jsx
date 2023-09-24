import '../components/Popular.scss';
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
        <CategoryCard
          img={toolsHome1}
          text='Tools & Home'
          link={'/Categories/Tools'}
        />
        <CategoryCard
          img={sportOutdoors}
          text='Sport & Outdoors'
          link={'/Categories/Sports'}
        />
        <CategoryCard
          img={homeKitchen}
          text='Home & Kitchen'
          link={'/Categories/Home'}
        />
        <CategoryCard
          img={toysGames}
          text='Toys & Games'
          link={'/Categories/Toys'}
        />
      </div>
      <div className='grid-bottom'>
        <CategoryCard
          img={clothes}
          text='Clothes'
          height='270px'
          link={'/Categories/Clothes'}
        />
        <CategoryCard
          img={electronics}
          text='Electronics'
          link={'/Categories/Electronics'}
        />
        <CategoryCard
          img={automotive}
          text='Automotive'
          link={'/Categories/Automotive'}
        />
      </div>
    </section>
  );
};
