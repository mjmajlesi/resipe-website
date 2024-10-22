import React from 'react';
import './App.css';
import {Route , Routes } from 'react-router-dom';
import Main from './pages/Main';
import Cuisine from './pages/Cuisine';
import Category from './components/Category';
import Searched from './components/Searched';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
    <Category />
      <Routes>
        <Route element={<Main />} path='/'  />
        <Route element={<Cuisine />} path='/cuisine/:type' />
        <Route element={<Searched />} path='/searched/:search' />
        <Route element={<Recipe />} path='/recipe/:name' />
      </Routes>
    </>
  );
} 

export default App;
