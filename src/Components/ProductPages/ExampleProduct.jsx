import { useState, useEffect } from "react";
import "./ProductPagesCSS/ExampleProduct.css";

const ExampleProduct = () => {
  const [visitors, setVisitors] = useState(168);

  useEffect(() => {
    const updateVisitors = () => {
      const newVisitors = 100 + Math.floor(Math.random() * 101);
      setVisitors(newVisitors);
    };

    updateVisitors();

    const interval = setInterval(updateVisitors, 10000);

    return () => clearInterval(interval);
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

        <div className="ag-product-description">
          <div className="ag-product-vid">
          <video className="ag-product-large-vid" autoPlay loop muted playsInline style={{ width: "100%" }}>
              <source
                src="https://cdn.shopify.com/videos/c/o/v/1944655a6090498cbfb2d49a84b01b62.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <video className="ag-product-small-vid" autoPlay loop muted playsInline style={{ width: "100%" }}>
              <source
                src="https://cdn.shopify.com/videos/c/o/v/3aa06dc9130f42c6974a341e63eb217c.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="ag-product-img-text ag-multicol">
            <div className="ag-product-img-text-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Tinted_Slide_01_Mobile.jpg"
                alt=""
              />
            </div>
            <div className="ag-product-img-text-text">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum.
              </p>
            </div>
          </div>

          <div className="ag-product-img-text ag-multicol-2">
            <div className="ag-product-img-text-text">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum.
              </p>
            </div>
            <div className="ag-product-img-text-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Tinted_Slide_01_Mobile.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="ag-product-img-text ag-multicol">
            <div className="ag-product-img-text-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Tinted_Slide_01_Mobile.jpg"
                alt=""
              />
            </div>
            <div className="ag-product-img-text-text">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum.
              </p>
            </div>
          </div>

          <div className="ag-product-img-text ag-multicol-2">
            <div className="ag-product-img-text-text">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Labore
                ipsum, quod iure nam porro facilis perferendis architecto
                suscipit distinctio tempore, voluptatum ullam dicta in cum.
              </p>
            </div>
            <div className="ag-product-img-text-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Tinted_Slide_01_Mobile.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExampleProduct;
