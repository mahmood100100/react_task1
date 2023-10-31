import './App.css';
import Navbar from './navbar/Navbar.jsx';
import Resturant from './resturent/Resturant.jsx';
import Products from './products/Products.jsx';
import Recipe_details from "./recipe_details/Recipe_details.jsx"
import Footer from './footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Resturant />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipe_details/:id" element={<Recipe_details />}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
