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

