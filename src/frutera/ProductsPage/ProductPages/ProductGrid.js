import React from 'react';
import ReactDOM from 'react-dom';
import Product from "../components/product";
import ProductGrid from "../components/productGrid";
import LeftSide from "../components/leftSide";
import ProductCard from "../components/productCard";
import ProductShowcase from "../components/productShowcase";


function App() {
   return (
      <div>
         <ProductGrid />
      </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))