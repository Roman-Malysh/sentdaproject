import {useState} from 'react';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {Popular} from './components/Popular';
import {Perks} from './components/Perks';
import {LearnMore} from './components/LearnMore';
import {SubscribeForm} from './components/SubscribeForm';
import {Adress} from './components/Adress';
import {Footer} from './components/Footer';
import {OurMission} from './components/OurMission';
import {Mission} from './Mission';
import { AboutUs } from './AboutUs';
import { Shop } from './Shop';
import { Contacts } from './Contacts';
import { MyAccount } from './MyAccount';
import { Cart } from './Cart';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.scss';
import { Privacy } from './Privacy';
import { Login } from './components/Login';

export const Home = () => {
  return (
    <>
      <Banner />
      <Popular />
      <Perks />
      <LearnMore />
      <SubscribeForm />
      <Adress />
    </>
  );
};

export const App = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Mission' Component={Mission} />
          <Route path='/About' Component={AboutUs} />
          <Route path='/Shop' Component={Shop} />
          <Route path='/Contacts' Component={Contacts} />
          <Route path='/Privacy' Component={Privacy} />
          <Route path='/MyAccount' Component={MyAccount} />
          <Route path='/Cart' Component={Cart} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
