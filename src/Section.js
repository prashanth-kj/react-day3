import React from 'react';

function Section({ products, setProduct, addToCart, removeFromCart,cartCount}) {
  const handleAddToCart = (productId) => {
    setProduct((prevProduct) => {
      const updatedProducts = prevProduct.map((product) => {
        if (product.id === productId) {
          return { ...product, inCart: true };
        }
        return product;
      });
      return updatedProducts;
    });
    addToCart();
  };

  const handleRemoveFromCart = (productId) => {
    setProduct((prevProduct) => {
      const updatedProducts = prevProduct.map((product) => {
        if (product.id === productId) {
          return { ...product, inCart: false };
        }
        return product;
      });
      return updatedProducts;
    });
    removeFromCart();
  };

  return (
    <section className="py-5">
           <button className="btn btn-secondary m-2" type="submit">
              <i className="bi-cart-fill  ms-1"></i>
              Cart
              <span className="badge bg-black text-white ms-1 rounded-pill">{cartCount}</span>
            </button>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {/* Product image */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>
                    {/* Product rating */}
                    <p>{product.star}</p>
                    {/* Product price */}
                    <span className="text-muted text-decoration-line-through">{product.minprice}</span>
                    {product.maxprice}
                  </div>
                </div>
                {/* Add to cart button */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {!product.inCart ? (
                      <button className="btn btn-dark mt-auto" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    ) : (
                      <button className="btn btn-light mt-auto" onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;








// function Section({products,setProduct}) {

        
   
//     const addToCart =(productId)=>{
//       setProduct((prevProduct)=>{
//         const updateProducts = prevProduct.map((product)=>{
//           if(product.id===productId){
//             return{...product, inCart:true}
//           }
//           return product;
//         })
//         return updateProducts;
//       })
       
//      }

//      const removeFromCart =(productId)=>{
//         setProduct((prevProduct)=>{
//             const updateProducts =prevProduct.map((product)=>{
//                 if(product.id===productId){
//                    return{...product,inCart:false}
//                 }
//                 return product
//             })
//             return updateProducts;
//         })
      
//      }


//   return (
//       <section className="py-5">
//       <div className="container px-4 px-lg-5 mt-5">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center"> {/* Line 6 */}
//           {products.map((product)=>(
//             <div className="col mb-5" key={product.id}>
//               <div className="card h-100">
//               {/* Product image */}
//               <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
//               {/* Product details */}
//               <div className="card-body p-4">
//                 <div className="text-center">
//                   {/* Product name */}
//                   <h5 className="fw-bolder">{product.name}</h5>
//                   {/* product rating*/ }
//                   <p>{product.star}</p>
//                   {/* Product price */}
//                   <span className="text-muted text-decoration-line-through">{product.minprice}</span>
//                     {product.maxprice}
//                 </div>
//               </div>
//               {/* Add to cart button */}
//               <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                    {!product.inCart ?
//                       <button className="btn btn-primary mt-auto"  onClick={()=>addToCart(product.id)}>Add to Cart</button>
//                      : <button className='btn btn-primary mt-auto'   onClick={()=>removeFromCart(product.id)}>Remove from Cart</button> 

//                    }
//                   </div>
//               </div>
//             </div>
//           </div>

//           ))}
          
        
//           </div>
//       </div>
//       </section>
//     )
//   }

// export default Section



// {/* <div className="col mb-5">
// <div className="card h-100">
// {/* Sale badge */}
// <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product reviews */}
//     <div className="d-flex justify-content-center small text-warning mb-2">
//         <div className="bi-star-fill">{product.star}</div>
        
//     </div>
//     {/* Product price */}
//     <span className="text-muted text-decoration-line-through">{product.minprice}</span>
//   {product.maxprice}
//     </div>
// </div>
// {/* Product actions */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Card">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product price */}
//     {product.minprice}{product.maxprice}
//     </div>
// </div>
// {/* Add to cart button */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Sale badge */}
// <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product reviews */}
//     <div className="d-flex justify-content-center small text-warning mb-2">
//         <div className="bi-star-fill">{product.star}</div>
        
//     </div>
//     {/* Product price */}
//     <span className="text-muted text-decoration-line-through">{product.minprice}</span>
//     {product.maxprice}
//     </div>
// </div>
// {/* Product actions */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product price */}
//     {product.maxprice}
//     </div>
// </div>
// {/* Add to cart button */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="{#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product price */}
//     {product.maxprice}
//     </div>
// </div>
// {/* Add to cart button */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Sale badge */}
// <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product reviews */}
//     <div className="d-flex justify-content-center small text-warning mb-2">
//         <div className="bi-star-fill">{product.star}</div>
       
//     </div>
//     {/* Product price */}
//     <span className="text-muted text-decoration-line-through">{product.minprice}</span>
//     {product.maxprice}
//     </div>
// </div>
// {/* Product actions */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div>
// <div className="col mb-5">
// <div className="card h-100">
// {/* Sale badge */}
// <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
// {/* Product image */}
// <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
// {/* Product details */}
// <div className="card-body p-4">
//     <div className="text-center">
//     {/* Product name */}
//     <h5 className="fw-bolder">{product.name}</h5>
//     {/* Product reviews */}
//     <div className="d-flex justify-content-center small text-warning mb-2">
//         <div className="bi-star-fill">{product.star}</div>
        
//     </div>
//     {/* Product price */}
//     <span className="text-muted text-decoration-line-through">{product.minprice}</span>
//     {product.maxprice}
//     </div>
// </div>
// {/* Product actions */}
// <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//     <div className="text-center">
//     <a className="btn btn-outline-dark mt-auto" href="#Add to Cart">{product.link}</a>
//     </div>
// </div>
// </div>
// </div> */}