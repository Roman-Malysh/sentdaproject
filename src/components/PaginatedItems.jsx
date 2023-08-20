import {useEffect, useState, useRef} from 'react';
import './PaginatedItems.scss';
import classNames from 'classnames';
import {Pagination} from './Pagination';
import {ProductCard} from './ProductCard';
import {Item} from '../Pages/Item';
import json from "../products.json"




export function getNumbers(from, to) {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

const items = getNumbers(1, 42).map((n) => `Item ${n}`);

export const PaginatedItems = ({sort, setId, selectedItemId}) => {

  const products = json.map((item) => (
    <ProductCard
      item={item}
      key={item.ID}
      category={item.Categories}
      setId={setId}
      selectedItemId={selectedItemId}
    />
  ));
  
  const [items, setItems] = useState(products);

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // items.map(item => console.log(item.props.category));

  const [filter, setFilter] = useState(sort);

  

  const automotive = products.filter(
    (item) => item.props.category === 'Automotive'
  );
  const home = products.filter(
    (item) => item.props.category === 'Home &amp; Kitchen'
  );
  const pet = products.filter((item) => item.props.category === 'Pet Supplies');
  const sport = products.filter(
    (item) => item.props.category === 'Sports &amp; Outdoors'
  );
  const tools = products.filter(
    (item) => item.props.category === 'Tools &amp; Home Improvement'
  );
  const clothes = products.filter((item) => item.props.category === 'Clothes');
  const health = products.filter(
    (item) => item.props.category === 'Health &amp; Household'
  );
  const other = products.filter((item) => item.props.category === '');
  const toys = products.filter(
    (item) => item.props.category === 'Toys &amp; Games'
  );
  const grocery = products.filter((item) => item.props.category === 'Grocery');
  const electronics = products.filter(
    (item) => item.props.category === 'Electronics'
  );
  const movies = products.filter(
    (item) => item.props.category === 'Movies &amp; TV'
  );
  const music = products.filter(
    (item) => item.props.category === 'Musical Instruments'
  );
  const books = products.filter((item) => item.props.category === 'Books');
  const office = products.filter(
    (item) => item.props.category === 'Office Products'
  );
  const beauty = products.filter(
    (item) => item.props.category === 'Beauty &amp; Personal Care'
  );

  useEffect(() => {
    filterItems(filter);
    console.log(filter);
  }, [filter]);

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  function filterItems(callback) {
    switch (callback) {
      case 'Other':
        setItems(other);
        break;
      case 'Clothes':
        setItems(clothes);
        break;
      case 'Automotive':
        setItems(automotive);
        break;
      case 'Home':
        setItems(home);
        break;
      case 'Pet Supplies':
        setItems(pet);
        break;
      case 'Sports':
        setItems(sport);
        break;
      case 'Tools':
        setItems(tools);
        break;
      case 'Health':
        setItems(health);
        break;
      case 'Toys':
        setItems(toys);
        break;
      case 'Grocery':
        setItems(grocery);
        break;
      case 'Movies':
        setItems(movies);
        break;
      case 'Musical':
        setItems(music);
        break;
      case 'Books':
        setItems(books);
        break;
      case 'Office Products':
        setItems(office);
        break;
      case 'Beauty':
        setItems(beauty);
        break;
      case 'Other':
        setItems(beauty);
        break;
    }
  }

  const start = perPage * currentPage - perPage;
  const end = start + perPage <= items.length ? start + perPage : items.length;
  const visibleItems = items.slice(start, end);

  const handleChange = (event) => {
    setPerPage(+event.target.value);

    setCurrentPage(1);
  };

  return (
    <div className='containerPagination'>
      
      <div className='categoriess' ref={ref}>
        <button
          className={classNames('btn', {'is-active': filter === 'Automotive'})}
          onClick={() => setFilter('Automotive')}
        >
          Automotive <br/>{automotive.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Home'})}
          onClick={() => setFilter('Home')}
        >
          Home &amp; Kitchen  <br/>{home.length}
        </button>
        <button
          className={classNames('btn', {
            'is-active': filter === 'Pet Supplies',
          })}
          onClick={() => setFilter('Pet Supplies')}
        >
          Pet Supplies  <br/>{pet.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Sports'})}
          onClick={() => setFilter('Sports')}
        >
          Sports &amp; Outdoors  <br/>{sport.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Tools'})}
          onClick={() => setFilter('Tools')}
        >
          Tools &amp; Home Improvement  <br/>{tools.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Clothes'})}
          onClick={() => setFilter('Clothes')}
        >
          Clothes  <br/>{clothes.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Health'})}
          onClick={() => setFilter('Health')}
        >
          Health &amp; Household  <br/>{health.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Other'})}
          onClick={() => setFilter('Other')}
        >
          Other  <br/>{other.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Toys'})}
          onClick={() => setFilter('Toys')}
        >
          Toys &amp; Games  <br/>{toys.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Grocery'})}
          onClick={() => setFilter('Grocery')}
        >
          Grocery  <br/>{grocery.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Electronics'})}
          onClick={() => setFilter('Electronics')}
        >
          Electronics  <br/>{electronics.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Movies'})}
          onClick={() => setFilter('Movies')}
        >
          Movies &amp; TV  <br/>{movies.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Musical'})}
          onClick={() => setFilter('Musical')}
        >
          Musical Instruments  <br/>{music.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Books'})}
          onClick={() => setFilter('Books')}
        >
          Books  <br/>{books.length}
        </button>
        <button
          className={classNames('btn', {
            'is-active': filter === 'Office Products',
          })}
          onClick={() => setFilter('Office Products')}
        >
          Office Products  <br/>{office.length}
        </button>
        <button
          className={classNames('btn', {'is-active': filter === 'Beauty'})}
          onClick={() => setFilter('Beauty')}
        >
          Beauty &amp; Personal Care  <br/>{beauty.length}
        </button>
      </div>
      <div className='line' />
      <div>
        <p className='lead' data-cy='info'>
          {`Page ${currentPage} (items ${start + 1} - ${end} of ${
            items.length
          })`}
        </p>
        <ul className='gridProducts'>{visibleItems}</ul>
        <div className='form-group row'></div>

        <Pagination
          total={items.length - 1}
          perPage={perPage}
          currentPage={currentPage}
          onPageChanger={setCurrentPage}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
