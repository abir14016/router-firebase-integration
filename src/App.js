import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Regester from './components/Regester/Regester';
import Products from './components/Products/Products';
import Order from './components/Orders/Order';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element=
          {<RequireAuth>
            <Products></Products>
          </RequireAuth>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>

        <Route path='/orders' element=
          {<RequireAuth>
            <Order></Order>
          </RequireAuth>}>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
