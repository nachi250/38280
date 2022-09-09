import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../src/Components/Cart/Cart';
import CartContextProvider from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
            <Route exact path='/:categoryId' element={<ItemListContainer />}/>
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
