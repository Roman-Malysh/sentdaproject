import {useState, useEffect} from 'react';
import {Adress} from '../components/Adress';
import {SubscribeForm} from '../components/SubscribeForm';
import {PaginatedItems} from '../components/PaginatedItems';
import axios, {isCancel, AxiosError} from 'axios';
import { ProductCard } from '../components/ProductCard';
import '../components/Defaultsection.scss';
import '../components/Shop.scss';


export const Shop = ({sort, setId, selectedItemId}) => {


  return (
    <div className='ourMission'>
      <h1 className='ourMission__title'>Products</h1>
      
      <h3 className='ourMission__subtitle last'>
        Here's a list of all our products
      </h3>
      <PaginatedItems sort={sort} setId={setId} selectedItemId={selectedItemId}/>
      <SubscribeForm />
      <Adress />
    </div>
  );
};
