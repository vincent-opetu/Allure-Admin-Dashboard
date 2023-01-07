import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Overview from './pages/dashboard/Overview';
import Login from './pages/Login';
import ProductsList from './pages/dashboard/ProductsList';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/overview" element={<Overview />} />
      <Route exact path="/products" element={<ProductsList />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
