import { useState, useEffect } from "react";
import {Product} from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 999,
        name: 'Product ' + (prevState.length + 1), 
        description: 'This is a product description',
        price: (prevState.length * 100) + 100,
        pictureUrl: 'https://via.placeholder.com/150',
      }
    ]);
  }

  return (
    <div>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct = {addProduct}/>
    </div>
  )
}

export default App
