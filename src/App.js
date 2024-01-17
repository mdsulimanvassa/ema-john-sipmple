import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Review from './components/Review/Review';
import Invantory from './components/Invatory/Invantory';
import NotFount from './components/NotFount/NotFount';
import ProductDetail from './components/ProductDetial/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/invantory' element={<Invantory/>}/>
          <Route path='/' element={<Navigate to='/Shop'/>}/>
          <Route path='/product/:productKey' element={<ProductDetail/>}/>
          <Route path='*' element={<NotFount/>}/>
      </Routes>
    </div>
  );
}



export default App;
