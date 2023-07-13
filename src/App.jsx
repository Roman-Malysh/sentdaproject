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
import {Mission} from './Pages/Mission';
import {AboutUs} from './Pages/AboutUs';
import {Shop} from './Pages/Shop';
import {Contacts} from './Pages/Contacts';
import {MyAccount} from './Pages/MyAccount';
import {Cart} from './Pages/Cart';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link, redirect} from 'react-router-dom';
import './App.scss';
import {Privacy} from './Pages/Privacy';
import {Login} from './components/Login';

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
          <Route path='/sentdaproject' Component={Home}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
