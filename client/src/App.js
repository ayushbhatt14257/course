import './App.css';
import Nav from './components/navbar/nav';
import Main from './components/home/main';
import Sigin from './components/signup_sign/signin';
import Siginup from './components/signup_sign/siginup';
import Cart from './components/cart/cart';
import BuyNow from './components/buynow/buynow';
import Mainc from './components/course/mainc';
import { Routes, Route } from 'react-router-dom';
import Logout from './components/logout/logout';
import { createContext, useEffect, useReducer, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { initialState, reducer } from './components/reducer/useReducer';

export const UserContext = createContext();


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Sigin />} />
        <Route path='/register' element={<Siginup />} />
        <Route path='/getproductsone/:id' element={<Cart />} />
        <Route path='/buynow' element={<BuyNow />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/course' element={<Mainc />} />
      </Routes>
    </>
  )
}


function App() {

  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000)
  }, [])

  const [mystate, dispatch] = useReducer(reducer, initialState)
  return (
    <> {
      data ? (
        <>
          <UserContext.Provider value={{ mystate, dispatch }}>

            <Nav />
            <Routing />
          </UserContext.Provider>
        </>
      ):(
        <div className='circle'>
          <CircularProgress/>
          <h2>Loading...</h2>
        </div>
      )
    }


    </>
  );
}

export default App;
