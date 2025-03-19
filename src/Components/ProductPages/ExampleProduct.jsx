import { useState, useEffect } from "react";
import "./ProductPagesCSS/ExampleProduct.css";

const ExampleProduct = () => {
  const [visitors, setVisitors] = useState(168);

  useEffect(() => {
    const updateVisitors = () => {
      const newVisitors = 100 + Math.floor(Math.random() * 101); // Random between 100-200
      setVisitors(newVisitors);
    };

    updateVisitors(); // Initial update

    const interval = setInterval(updateVisitors, 10000); // Update every 10s

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <main className="ag-tempalte-container">
      <section className="ag-product-page-section">
        <div className="ag-product-view">
          <div className="ag-product-img-div">
            <img
              src="https://uniqaya.com/cdn/shop/files/Tinted_Galley_01.png"
              alt=""
            />
          </div>

          <div className="ag-product-info">
            <h1>Example Product</h1>
            <p>Small description of product</p>
            <p>Reviews *</p>
            <p>Quantity selector</p>
            <p>Rs. Price</p>
            <button>Add to Cart</button>
            <div className="ag-product-page-logos">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/6_Clinically_Proven.jpg?v=1725447616" />
              </div>

              <div>
                <img src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/3_Paraben_Free_Final.jpg?v=1725447616" />
              </div>

              <div>
                <img src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/2_Sulfate_Free_Final.jpg?v=1725447616" />
              </div>
            </div>

            <div className="ag-product-add-offers">
              <div className="offers-header">
                <h2>Additional Offers</h2>
              </div>

              <div className="offer-description">
                <div className="offer-content">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Additional_Offer-png.png?v=1722923628"
                    alt="Special Offers"
                    width="26"
                    height="26"
                  />
                  <p>Buy any &amp; get Hydra Sunscreen free.</p>
                </div>

                <div className="offer-content">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Additional_Offer-png.png?v=1722923628"
                    alt="Special Offers"
                    width="26"
                    height="26"
                  />
                  <p>Extra 5% Discount on Prepaid Orders</p>
                </div>

                <div className="offer-content">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Additional_Offer-png.png?v=1722923628"
                    alt="Special Offers"
                    width="26"
                    height="26"
                  />
                  <p>Free shipping above Rs. 999</p>
                </div>
              </div>
            </div>

            <div className="visitors">
              <div className="light"></div>
              <p className="visitors-text">
                {visitors} visitors are now watching this product.
              </p>
            </div>
          </div>
        </div>

        <div className="ag-product-description"></div>
      </section>
    </main>
  );
};

export default ExampleProduct;
