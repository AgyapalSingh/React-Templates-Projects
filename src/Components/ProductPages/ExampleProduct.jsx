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

  const accordionData = [
    {
      title: "Product Description",
      content: `UniQaya’s SunScreen: Full Protection Broad Spectrum Tinted Sunscreen with SPF 50 is your go-to solution for complete sun protection. 
      It is formulated with the perfect blend of natural ingredients to keep your skin nourished and protected from harmful UVA, UVB, and blue rays. 
      \n\n

      This tinted sunscreen comes with an SPF of 50, which provides maximum protection to your skin from sun damage. 
      The broad-spectrum formula effectively blocks the harmful UVA and UVB rays, preventing premature aging and sunburn.
      \n\n
      The tinted sunscreen provides a sheer coverage, leaving your skin with a radiant glow. The lightweight formula is perfect for daily use and can be worn alone or as a makeup base. 
      It blends seamlessly with your skin tone, giving you a natural look.
      \n\n`,
    },
    {
      title: "Key Ingredients",
      content: `• Artichoke Extract\n\n
      • Avocado Oil\n\n
      • Carrot Seed Oil\n\n
      • Linoleic Acid\n\n
      • Lycopene\n\n
      • Vitamin F\n\n`,
    },
    {
      title: "Why would you love it?",
      content: `- Water resistant/ Sweat resistant\n\n
      - Natural SPF inducing ingredients\n\n
      - Can be used indoors\n\n
      - Lasts up to 4 hours\n\n
      - Protects from UVA/ UVB/ HEV/ IR rays\n\n
      - Shields Skin from Bluelight Rays\n\n
      - Reduces signs of aging\n\n`,
    },
    {
      title: "Who is it good for?",
      content: `Skin Types: All Skin Types (Unisex)\n\n
      Skin Concerns: Sun Damaged Skin, Gadget Screen Damaged Skin\n\n`,
    },
    {
      title: "The Experience",
      content: `The Texture- Lightweight, whipped\n\n
      The Aroma- Fruity\n\n
      Skin Feels- Hydrated & Protected\n\n
      Skin Appears- Moisturised with light coverage\n\n`,
    },
    {
      title: "How to use it?",
      content: `- Cleanse your face and then apply your regular moisturizer.\n\n
      - Take a coin-size amount of sunscreen.\n\n
      - Apply all over the face and spread it out evenly.\n\n
      - Make sure to apply to the exposed body parts.\n\n`,
    },
    {
      title: "FAQ",
      content: `1. How is it different from other broad-spectrum sunscreens with SPF 50?\n\n
      It not only provides protection just from the harmful rays of the sun but also from the indoor HEV rays coming from gadgets.
      \n\n
      2. Can it be used on a moisturizer?\n\n
      Yes, it can be used on top of a moisturizer and as a makeup base.\n\n
  
      3. Can we wear it indoors?\n\n
      Yes, it protects against rays emitted by gadgets and prevents photoaging.\n\n`,
    },
    {
      title: "Company Information",
      content: `Marketed By: Unimarck Pharma (I) Ltd.\n\n
      Plot No.76, Sector 82, JLPL Industrial Area,\n\n
      SAS Nagar Mohali, Punjab-140308\n\n
      Country of Origin: India\n\n
      Customer Care: care@uniqaya.com | +91-8872033171\n\n`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <video
              className="ag-product-large-vid"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%" }}
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/1944655a6090498cbfb2d49a84b01b62.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <video
              className="ag-product-small-vid"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%" }}
            >
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

          <div className="ag-product-result">
            <img
              className="img-small"
              src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Tinted_Slide_05_Mobile.jpg?v=1725953109"
              alt=""
            />
            <img
              className="img-large"
              src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Final_Visible.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="ag-product-accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="ag-product-accordion__item">
              <div
                className="ag-product-accordion__header"
                onClick={() => toggleAccordion(index)}
              >
                <h2>{item.title}</h2>
                <span
                  className={`ag-product-accordion__toggle ${
                    activeIndex === index ? "open" : ""
                  }`}
                ></span>
              </div>
              {activeIndex === index && (
                <div className="ag-product-accordion__body">
                  {item.content.split("\n\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExampleProduct;
