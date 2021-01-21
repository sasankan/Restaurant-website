import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FirstPage from './Component/FirstPage';
import Products from './Component/Products';
import { GlobalStyle } from './GlobalStyles';
import { productData, productDataTwo } from './Component/Products/data';
import Feature from './Component/Feature';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <FirstPage/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Other special dishes' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
