import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Cuisine from './pages/Cuisine';
import Category from './components/Category';
import Searched from './components/Searched';
import Recipe from './pages/Recipe';
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Category />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<Main />} path='/' />
          <Route element={<Cuisine />} path='/cuisine/:type' />
          <Route element={<Searched />} path='/searched/:search' />
          <Route element={<Recipe />} path='/recipe/:name' />
          <Route element={<Recipe />} path='/cuisine/:type/recipe/:name' />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
