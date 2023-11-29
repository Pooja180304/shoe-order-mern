import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import Display from './display';
import Cart from './cart';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='App'>
      <ToastContainer></ToastContainer>
      <BrowserRouter basename="/shoe-order-mern">
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
