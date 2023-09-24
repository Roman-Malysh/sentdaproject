import {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { SubscribeForm } from '../components/SubscribeForm';
import { PopularProducts } from '../components/PopularProduct';
import { Adress } from '../components/Adress';
import {NavLink, Link} from 'react-router-dom';
import '../components/PaginatedItems';
import classNames from 'classnames';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
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

export const Category = ({sort, searchParam, pageNumber}) => {
  const {category} = useParams();
  const {page} = useParams();


  const products = json.map((item) => (
    <ProductCard
      item={item}
      key={item.ID}
      category={item.Categories}
    />
  ));
  
  const [items, setItems] = useState(products);

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // items.map(item => console.log(item.props.category));

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
    const res = products.filter((product) => {return product.props.item.Name.match(searchParam)});
    setItems(res);
}, [searchParam])

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
},[])
  

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
 

  const start = perPage * currentPage - perPage;
  const end = start + perPage <= items.length ? start + perPage : items.length;
  const visibleItems = items.slice(start, end);

  const handleChange = (event) => {
    setPerPage(+event.target.value);

    setCurrentPage(1);
  };

  return (
    <div className='containerPagination'>
      <h2 className='category-title'>{category.replace('_', ' ')}</h2>
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
      <SubscribeForm />
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </div>
  );
};
