
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import kids_banner from './components/Assets/banner_kids.png';
import women_banner from './components/Assets/banner_women.png';


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/Men'element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/Women'element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids'element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product'element={<Product />}>
          <Route path=':productId'element={<Product />}/>
        </Route>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login'element={<LoginSignup/>}/>

        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
