import './Popular.scss';
import {CategoryCard} from './CategoryCard';

export const Popular = () => {
  return (
    <section className='popular'>
      <h2 className='popular__title section-title'>Popular categories</h2>
      <div className='grid-tablet grid-mobile'>
        <CategoryCard
          img={
            'https://skilledtradesbc.ca/sites/default/files/2023-01/tradeworkers_02_web.jpg'
          }
          text='Tools & Home'
          height='200px'
        />
        <CategoryCard
          img={
            'https://www.shopmyexchange.com/assets/img/lp/story/sports-outdoors-2023-story-basketball-tile01.jpg'
          }
          text='Sport & Outdoors'
          height='200px'
        />
        <CategoryCard
          img={
            'https://photos.perryhomes.com/photogallery/gallery/08c4df8a-3904-443a-b7cb-6e08c9790b1b.jpg'
          }
          text='Home & Kitchen'
          height='200px'
        />
        <CategoryCard
          img={
            'https://johnlewis.scene7.com/is/image/JohnLewis/baby-child-outdoor-toys-games-carousel6-desk-230323'
          }
          text='Toys & Games'
          height='200px'
        />
      </div>
      <div className='grid-bottom'>
        <CategoryCard
          img={
            'https://c1.wallpaperflare.com/preview/167/980/1019/apparel-choosing-clothing-fashion-thumbnail.jpg'
          }
          text='Clothes'
          height='270px'
        />
        <CategoryCard
          img={
            'https://s3images.coroflot.com/user_files/individual_files/436698_QkC2eNc8a9p63uO9z62rCe2DH.jpg'
          }
          text='Electronics'
          height='270px'
        />
        <CategoryCard
          img={
            'https://t3.ftcdn.net/jpg/03/27/91/04/360_F_327910493_NePH9xHeEcO5i0BGU36l0rWd7TdCRtWf.jpg'
          }
          text='Automotive'
          height='270px'
        />
      </div>
    </section>
  );
};
