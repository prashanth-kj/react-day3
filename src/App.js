import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Nav";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import React, { useState } from 'react';

function App() {
  const [products,setProduct]=useState([
    {
               id:1,
               name:"Fancy Product",
               minprice:"$40.00",
               maxprice:"$80.00",
               rating:0,
               link:"View options",
               inCart:false
            },
            {
              id:2,
              name:"Special Item",
              minprice:"$20.00",
              maxprice:"$18.00",
              star:"⭐⭐⭐⭐⭐",
              link:"Add to cart",
              inCart:false
           },
           {
            id:3,
            name:"Sale Item",
            minprice:"$50.00",
            maxprice:"$25.00",
            star:"",
            link:"Add to cart",
            inCart:false
         },
         {
          id:4,
          name:"Popular Item",
          minprice:" ",
          maxprice:"$40.00",
          star:"⭐⭐⭐⭐⭐",
          link:"Add to cart",
          inCart:false
       },
       {
        id:5, 
        name:"Sale Item",
        minprice:"$50.00 ",
        maxprice:"$25.00",
        star:"",
        link:"Add to cart",
        inCart:false
      },
      {
        id:6,
        name:"Fancy Product",
        minprice:"$120.00",
        maxprice:"$280.00",
        star:"",
        link:"View options",
        inCart:false
      },
      {
        id:7,
        name:"Special Item",
        minprice:"$20.00",
        maxprice:"$18.00",
        star:"⭐⭐⭐⭐⭐",
        link:"Add to cart",
        inCart:false
      },
      {
        id:8,
        name:"Popular Item",
        minprice:" ",
        maxprice:"$40.00",
        star:"⭐⭐⭐⭐⭐",
        link:"Add to cart",
        inCart:false
      },
   ])

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = () => {
    setCartCount((prevCount) => prevCount - 1);
  };
 
  return (
    <div>
      <Nav cartCount={cartCount} setCartCount={setCartCount} />
      <Header />
      <Section products={products} setProduct={setProduct} addToCart={addToCart} removeFromCart={removeFromCart} cartCount={cartCount}/>
      <Footer/>
    </div>
  );
}

export default App;
