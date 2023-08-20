import {useState} from 'react';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {Popular} from './Pages/Popular';
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
import {Item} from './Pages/Item';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
} from 'react-router-dom';
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
  const [selectedItemId, setId] = useState(0);

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Mission' Component={Mission} />
          <Route path='/About' Component={AboutUs} />
          <Route
            path='/Shop'
            Component={(props) => <Shop {...props} setId={setId} selectedItemId={selectedItemId} />}
          />
          <Route
            path='/ShopBooks'
            Component={(props) => <Shop {...props} sort={'Books'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopTools'
            Component={(props) => <Shop {...props} sort={'Tools'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopSport'
            Component={(props) => <Shop {...props} sort={'Sports'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopHome'
            Component={(props) => <Shop {...props} sort={'Home'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopToys'
            Component={(props) => <Shop {...props} sort={'Toys'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopClothes'
            Component={(props) => <Shop {...props} sort={'Clothes'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopElectronics'
            Component={(props) => <Shop {...props} sort={'Electronics'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route
            path='/ShopAutomotive'
            Component={(props) => <Shop {...props} sort={'Automotive'} selectedItemId={selectedItemId} setId={setId}/>}
          />
          <Route path='/Contacts' Component={Contacts} />
          <Route path='/Privacy' Component={Privacy} />
          <Route path='/MyAccount' Component={MyAccount} />
          <Route path='/Cart' Component={Cart} />
          <Route path='/sentdaproject' Component={Home} />
          <Route
            path='/item'
            Component={(props) => <Item {...props} selectedItemId={selectedItemId} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
