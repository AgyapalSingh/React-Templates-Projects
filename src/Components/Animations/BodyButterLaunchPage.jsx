import React, { useEffect, useState, useRef } from "react";
import "./AnimationCSS/BodyButterLaunchPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BodyButterLaunchPage = () => {
  const titleRef = useRef(null);
  const fullText = "Anti Stretch Mark Body Butter";
  const shortText = "A.S.M.B.B.";

  useEffect(() => {
    if (!titleRef.current) return;

    let tl_product_title = gsap.timeline({
      scrollTrigger: {
        trigger: ".bb-product-title",
        start: "top top",
        end: "bottom 75%",
        scrub: 2,
      },
    });

    tl_product_title.from(".ag-product-benefit-lis-bb li", {
      y: 10,
      duration: 0.5,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: ".ag-product-benefit-lis-bb",
        start: "top 75%",
        end: "top 45%",
        scrub: 1,
      },
    });

    let progressTracker = { progress: 0 };

    tl_product_title.to(progressTracker, {
      progress: 1,
      onUpdate: function () {
        const progress = progressTracker.progress;
        const textLength = Math.round(progress * fullText.length);
        const visibleText = fullText.substring(0, textLength) || shortText;

        if (titleRef.current) {
          titleRef.current.textContent = visibleText;

          if (
            visibleText === shortText ||
            visibleText.length < fullText.length
          ) {
            titleRef.current.style.fontSize = "8vh";
            titleRef.current.style.opacity = 1;
          } else {
            titleRef.current.style.fontSize = "32px";
            titleRef.current.style.opacity = 1;
          }
        }
      },
    });

    tl_product_title.to(titleRef.current, {
      top: "25%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".ag-product-animation-container-bb",
        start: "top 65%",
        end: "top 50%",
        scrub: 1,
      },
    });

    tl_product_title.to(titleRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: ".ag-product-animation-container-bb",
        start: "top 0%",
        end: "top -15%",
        scrub: 1,
      },
    });

    return () => {
      tl_product_title.kill();
    };
  }, []);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frames = useRef({ currentIndex: 0, maxIndex: 27 });

  useEffect(() => {
    const preloadImages = async () => {
      let loadedImages = [];
      let imagesLoaded = 0;

      for (let i = 0; i < frames.current.maxIndex; i++) {
        const imageUrl = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/BodyButter${i
          .toString()
          .padStart(3, "0")}.png?v=1735800447`;

        const img = new Image();
        console.log(imageUrl);
        img.src = imageUrl;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.current.maxIndex) {
            setImages(loadedImages);
          }
        };
        loadedImages.push(img);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (images.length === frames.current.maxIndex) {
      loadImage(0);
      startAnimation();
    }
  }, [images]);

  const loadImage = (index) => {
    if (!canvasRef.current || index < 0 || index >= frames.current.maxIndex)
      return;

    const ctx = canvasRef.current.getContext("2d");
    const img = images[index];
    if (!img) return;

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight / 2;

    canvasRef.current.width = canvasWidth;
    canvasRef.current.height = canvasHeight;

    const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvasWidth - newWidth) / 2;
    const offsetY = (canvasHeight - newHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  };

  const startAnimation = () => {
    gsap.to(frames.current, {
      currentIndex: frames.current.maxIndex - 1,
      scrollTrigger: {
        trigger: ".ag-product-animation-container-bb",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage(Math.floor(frames.current.currentIndex)),
    });
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-launch-page-container-bb">
        {/* Product Title */}
        <div className="bb-product-title">
          <h1 id="bb-animated-title" ref={titleRef}>
            A.S.M.B.B
          </h1>
        </div>

        {/* Product Animation */}
        <div className="ag-product-animation-container-bb">
          <div className="ag-product-animation-canvas-div-bb">
            <canvas
              id="ag-product-animation-canvas-bb"
              ref={canvasRef}
            ></canvas>
          </div>
        </div>

        {/* Product Benefits */}
        <div className="ag-animation-bb ">
          <h1>You'll Get :</h1>
        </div>
        <div className="ag-product-benefit-container-bb">
          <ul className="ag-product-benefit-lis-bb">
            <li>Smooth, nourished skin</li>
            <li>Stretch mark reduction</li>
            <li>Rich, creamy texture</li>
            <li>Soothing fragrance</li>
            <li>Skin regeneration</li>
            <li>Intense moisture</li>
            <li>Natural extracts</li>
            <li>Elasticity boost</li>
          </ul>
        </div>

        {/* Product Ingredients */}
        <div className="ag-animation-bb">
          <h1>Because We Used :</h1>
        </div>

        <div className="ag-product-ingredients-container-bb">
          <div className="ag-product-ingredients-container-div-bb">
            <div className="ag-product-ingredient-card-bb">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Italian-Butter-Ing.png?v=1735884931"
                loading="lazy"
                alt="Italian Cocoa Butter"
              />
              <h1>Italian Cocoa Butter</h1>
              <span className="ingredient-info-bb">
                Deeply hydrates and improves skin elasticity.
              </span>
            </div>
            <div className="ag-product-ingredient-card-bb">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/BB-I-Shea-Butter.png?v=1735814508"
                loading="lazy"
                alt="Shea Butter"
              />
              <h1>Shea Butter</h1>
              <span className="ingredient-info-bb">
                Nourishes and softens dry, rough skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card-bb">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Coffee-Ing.png?v=1735883615"
                loading="lazy"
                alt="Coffee Arabica Seed"
              />
              <h1>Coffee Arabica Seed</h1>
              <span className="ingredient-info-bb">
                Tones and revitalizes skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card-bb">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Senegal-Gum.png?v=1735880966"
                loading="lazy"
                alt="Acacia Senegal Gum"
              />
              <h1>Acacia Senegal Gum</h1>
              <span className="ingredient-info-bb">
                Enhances skin hydration and resilience.
              </span>
            </div>
            <div className="ag-product-ingredient-card-bb">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Hyaluronic_Acid_4fec6bd7-f837-4620-954f-f0b805d33593.png?v=1735880965"
                loading="lazy"
                alt="Hyaluronic Acid"
              />
              <h1>Hyaluronic Acid</h1>
              <span className="ingredient-info-bb">
                Locks in moisture for soft, glowing skin.
              </span>
            </div>
          </div>
        </div>

        {/* Product Results */}
        <div className="ag-animation-bb">
          <h1>Visible Results In 8 Weeks :</h1>
        </div>

        <div className="ag-product-result-bb">
          <video className="img-small-bb" autoPlay loop muted playsInline>
            <source src="https://cdn.shopify.com/videos/c/o/v/7f9a6b6e316a4cdb85b6cfe2117c4ec6.mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <video className="img-large-bb" autoPlay loop muted playsInline>
            <source src="https://cdn.shopify.com/videos/c/o/v/f16c9fd36a1c4691a07303353fe7026e.mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="ag-animation-bb">
          <h1>"Trusted by them, perfect for you."</h1>
        </div>

        <div className="ag-products-reels-bb">
          <div className="ag-product-reel-bb">
            <p>Reel 1</p>
          </div>

          <div className="ag-product-reel-bb">
            <p>Reel 2</p>
          </div>

          <div className="ag-product-reel-bb">
            <p>Reel 3</p>
          </div>

          <div className="ag-product-reel-bb">
            <p>Reel 4</p>
          </div>
        </div>

        <div className="ag-pre-order-btn-bottm-div-bb">
          <Link className="ag-pre-order-btn-bottm-bb">Pre-Order</Link>
        </div>

        <div className="ag-pre-order-btn-div-bb">
          <Link className="ag-pre-order-btn-bb">Pre-Order</Link>
        </div>

        <div className="ag-scroll-text">
          <p>
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
            <span>↓</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default BodyButterLaunchPage;
