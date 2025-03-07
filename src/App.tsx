import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Cuisine from './pages/Cuisine';
import Searched from './components/Searched';
import Recipe from './pages/Recipe';
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<Main />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Cuisine />} path='/cuisine/:type' />
          <Route element={<Searched />} path='/searched/:search' />
          <Route element={<Recipe />} path='/recipe/:name' />
          <Route element={<Recipe />} path='/cuisine/:type/recipe/:name' />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
