import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Route, Routes} from "react-router-dom";
import Review from './components/Review/Review';
import Invantory from './components/Invatory/Invantory';
import NotFount from './components/NotFount/NotFount';
import ProductDetail from './components/ProductDetial/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivatRoute from './components/PrivatRoute/PrivarRoure';

export const UserContex = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <UserContex.Provider value={[loggedInUser, setLoggedInUser]}>
      <Header></Header>
      <Routes>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/invantory' element={<Invantory/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route element={<PrivatRoute/>}>
            <Route path='/shipment' element={<Shipment/>} />
          </Route>
          <Route path='/product/:productKey' element={<ProductDetail/>}/>
          <Route path='*' element={<NotFount/>}/>
      </Routes>
    </UserContex.Provider>
  );
}



export default App;
