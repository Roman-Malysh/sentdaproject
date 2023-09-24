import {useEffect, useState, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import './PaginatedItems.scss';
import classNames from 'classnames';
import {Pagination} from './Pagination';
import {ProductCard} from './ProductCard';
import { Shop } from '../Pages/Shop';
import {Item} from '../Pages/Item';
import json from "../products.json";




export function getNumbers(from, to) {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

const items = getNumbers(1, 42).map((n) => `Item ${n}`);

export const PaginatedItems = ({sort, searchParam, category}) => {

 

  const products = json.map((item) => (
    <ProductCard
      item={item}
      key={item.ID}
      category={item.Categories}
    />
  ));
  
  const [items, setItems] = useState(products);

  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState(category);

  

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
      switch (category) {
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
          case 'Electronics':
            setItems(electronics);
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
  }, [category]);

  useEffect(() => {
    if (searchParam !== undefined) {
      const res = products.filter((product) => {return product.props.item.Name.toLowerCase().match(searchParam.toLowerCase())});
    setItems(res);
    }
}, [searchParam])
  

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 

  const start = perPage * currentPage - perPage;
  const end = start + perPage <= items.length ? start + perPage : items.length;
  const visibleItems = items.slice(start, end);

  return (
    <div className='containerPagination'>
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
        {!searchParam && (
          <>
            <h1 className='filter-title'>Search by category</h1>
        <div className='categoriess' ref={ref}>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Automotive'})}
          onClick={() => {
            setFilter('Automotive');
            
          }}
          to="/Categories/Automotive"
        >
          Automotive <br/>{automotive.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Home'})}
          onClick={() => setFilter('Home')}
          to="/Categories/HomeAndKitchen"
        >
          Home &amp; Kitchen  <br/>{home.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {
            'is-active': category === 'Pet Supplies',
          })}
          onClick={() => setFilter('Pet Supplies')}
          to="/Categories/Pet_Supplies"
        >
          Pet Supplies  <br/>{pet.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Sports'})}
          onClick={() => setFilter('Sports')}
          to="/Categories/Sports"
        >
          Sports &amp; Outdoors  <br/>{sport.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Tools'})}
          onClick={() => setFilter('Tools')}
          to="/Categories/Tools"
        >
          Tools &amp; Home <br/>{tools.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Clothes'})}
          onClick={() => setFilter('Clothes')}
          to="/Categories/Clothes"
        >
          Clothes  <br/>{clothes.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Health'})}
          onClick={() => setFilter('Health')}
          to="/Categories/Health"
        >
          Health &amp; Household  <br/>{health.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Toys'})}
          onClick={() => setFilter('Toys')}
          to="/Categories/Toys"
        >
          Toys &amp; Games  <br/>{toys.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Grocery'})}
          onClick={() => setFilter('Grocery')}
          to="/Categories/Grocery"

        >
          Grocery  <br/>{grocery.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Electronics'})}
          onClick={() => setFilter('Electronics')}
          to="/Categories/Electronics"
        >
          Electronics  <br/>{electronics.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Movies'})}
          onClick={() => setFilter('Movies')}
          to="/Categories/Movies"
        >
          Movies &amp; TV  <br/>{movies.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': filter === 'Musical'})}
          onClick={() => setFilter('Musical')}
          to="/Categories/Musical"

        >
          Musical Instruments  <br/>{music.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': filter === 'Books'})}
          onClick={() => setFilter('Books')}
          to="/Categories/Books"
        >
          Books  <br/>{books.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {
            'is-active': filter === 'Office Products',
          })}
          onClick={() => setFilter('Office Products')}
          to="/Categories/Office_Products"

        >
          Office Products  <br/>{office.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': filter === 'Beauty'})}
          onClick={() => setFilter('Beauty')}
          to="/Categories/Beauty"

        >
          Beauty &amp; Care  <br/>{beauty.length}
        </NavLink>
        <NavLink
          className={classNames('btn', {'is-active': category === 'Other'})}
          onClick={() => {
            setFilter('Other');
            
          }}
          to="/Categories/Other"
        >
          Other <br/>{other.length}
        </NavLink>
      </div>
          </>
      )}
      </div>
    </div>
  );
};
