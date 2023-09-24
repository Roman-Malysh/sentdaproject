import {useState} from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Mission} from './Pages/Mission';
import {AboutUs} from './Pages/AboutUs';
import {Shop} from './Pages/Shop';
import {Contacts} from './Pages/Contacts';
import {MyAccount} from './Pages/MyAccount';
import {Cart} from './Pages/Cart';
import {Item} from './Pages/Item';
import {Home} from './Pages/Home';
import { Category } from './Pages/Category';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import {Privacy} from './Pages/Privacy';
import {ShippingPolicy} from './Pages/ShippingPolicy';
import { ReturnPolicy } from './Pages/ReturnPolicy';
import { InternationalPolicy } from './Pages/InternationalPolicy';
import { useDispatch } from 'react-redux';
import { MyAccountRegister } from './Pages/MyAccountRegister';

export const App = () => {
  const [search, setSearch] = useState('');
  const [keyWord, setKeyWord] = useState('');


  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        keyWord={keyWord}
        setKeyWord={setKeyWord}
      />
      <main className='main'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Mission' Component={Mission} />
          <Route path='/About' Component={AboutUs} />
          <Route
            path='/ShopSearch'
            Component={(props) => <Shop {...props} searchParam={keyWord} />}
          />
          <Route path='/Shop' Component={(props) => <Shop {...props} />} />
          <Route exact path='/Categories/:category' Component={Category} />
          <Route path='/Categories/:category/:page' Component={Category} />
          
          <Route
            path='/ShopBooks'
            Component={(props) => <Shop {...props} sort={'Books'} />}
          />
          <Route
            path='/ShopTools'
            Component={(props) => <Shop {...props} sort={'Tools'} />}
          />
          <Route
            path='/ShopSport'
            Component={(props) => <Shop {...props} sort={'Sports'} />}
          />
          <Route
            path='/ShopHome'
            Component={(props) => <Shop {...props} sort={'Home'} />}
          />
          <Route
            path='/ShopToys'
            Component={(props) => <Shop {...props} sort={'Toys'} />}
          />
          <Route
            path='/ShopClothes'
            Component={(props) => <Shop {...props} sort={'Clothes'} />}
          />
          <Route
            path='/ShopElectronics'
            Component={(props) => <Shop {...props} sort={'Electronics'} />}
          />
          <Route
            path='/ShopAutomotive'
            Component={(props) => <Shop {...props} sort={'Automotive'} />}
          />
          <Route path='/Contacts' Component={Contacts} />
          <Route path='/PrivacyPolicy' Component={Privacy} />
          <Route path='/ShippingPolicy' Component={ShippingPolicy} />
          <Route path='/ReturnPolicy' Component={ReturnPolicy} />
          <Route path='/InternationalPolicy' Component={InternationalPolicy} />
          <Route path='/MyAccount' Component={MyAccount} />
          <Route path='/MyAccountRegister' Component={MyAccountRegister} />
          <Route path='/Cart' Component={Cart} />
          <Route path='/sentdaproject' Component={Home} />
          <Route path='/item/:id' Component={Item} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
