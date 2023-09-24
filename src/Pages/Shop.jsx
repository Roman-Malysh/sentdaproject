import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import {PaginatedItems} from '../components/PaginatedItems';
import { PopularProducts } from '../components/PopularProduct';
import axios, {isCancel, AxiosError} from 'axios';
import {ProductCard} from '../components/ProductCard';
import '../components/Defaultsection.scss';
import '../components/Shop.scss';

export const Shop = ({
  sort,
  searchParam,
  setSearch,
  pageNumber,
}) => {
  const {filter} = useParams();
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  function Subscribe(e) {
    e.preventDefault();
    setTimeout(() => {
      setIsErrorLogin(true);
      setTimeout(() => {
        setIsErrorLogin(false);
      }, 5000);
    }, 5000);
  }

  return (
    <div className='ourMission'>
      {searchParam && (
        <p className='searchResult'>
          Search results for : {`"${searchParam}"`}
        </p>
      )}
      {!searchParam && <h1 className='ourMission__title'>Products</h1>}

      <PaginatedItems
        sort={sort}
        searchParam={searchParam}
        setSearch={setSearch}
        pageNumber={pageNumber}
        category={filter}
        itemsPerPage={5}
      />
      <SubscribeForm />
      <div className='popular-wrap'>
        <PopularProducts />
        <Adress />
      </div>
    </div>
  );
};
