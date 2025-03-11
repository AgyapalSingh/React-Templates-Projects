import React, { useEffect, useState, useRef } from "react";
import "./AnimationCSS/CalmingMoisturizerLaunchPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CalmingMoisturizerLaunchPage = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".calm_left-title_m", {
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-1-cm",
        start: "top 85%",
        end: "top 60%",
        scrub: 5,
        // markers: true,

        onUpdate: (self) => {
          const progress = self.progress;
          const leftTitle_m = document.querySelector(".calm_left-title_m h1");
          if (leftTitle_m) {
            if (progress > 0.5) {
              leftTitle_m.innerText = "AC-";
            } else {
              leftTitle_m.innerText = "AC";
            }
          }
        },
      },
    });

    tl.to(".calm_right-title_m", {
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-1-cm",
        start: "top 85%",
        end: "top 60%",
        scrub: 5,
        // markers: true,

        onUpdate: (self) => {
          const progress = self.progress;
          const rightTitle = document.querySelector(".calm_right-title_m h1");
          if (rightTitle) {
            if (progress > 0.5) {
              rightTitle.innerText = "NO!";
              rightTitle.style.color = "#e3e898";
            } else {
              rightTitle.innerText = "NE?";
              rightTitle.style.color = "#3b4322";
            }
          }
        },
      },
    });

    tl.to(".calm_left-title_m", {
      x: "-50vw",
      ease: "power1.out",
      fontSize: "28px",
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-1-cm",
        start: "top 30%",
        end: "top 15%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(".calm_right-title_m", {
      x: "+50vw",
      ease: "power1.out",
      fontSize: "28px",
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-1-cm",
        start: "top 30%",
        end: "top 15%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".ag-product-benefit-list-cm li", {
      y: 10,
      duration: 0.5,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: ".ag-product-benefit-list-cm",
        start: "top 75%",
        end: "top 45%",
        scrub: 1,
      },
    });


    tl.from(".ag-pre-order-btn-div", {
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ag-product-animation-container-m-1-cm",
        start: "top 75%",
        end: "top 45%",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  // Canvas 1
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frames = useRef({ currentIndex: 0, maxIndex: 65 });

  useEffect(() => {
    const preloadImages = async () => {
      let loadedImages = [];
      let imagesLoaded = 0;

      for (let i = 0; i < frames.current.maxIndex; i++) {
        const imageUrl = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
          .toString()
          .padStart(3, "0")}.png?v=1737009142`;

        const img = new Image();
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

    canvasRef.current.width = 300;
    canvasRef.current.height = 500;
    const scaleX = canvasRef.current.width / img.width;
    const scaleY = canvasRef.current.height / img.height;
    const scale = Math.max(scaleX, scaleY);
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (canvasRef.current.width - newWidth) / 2;
    const offsetY = (canvasRef.current.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, 300, 500);
  };

  const startAnimation = () => {
    gsap.to(frames.current, {
      currentIndex: frames.current.maxIndex - 1,
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-1-cm",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage(Math.floor(frames.current.currentIndex)),
    });
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-launch-page-container-cm">
        {/* Title */}
        <div className="calm_product-title_m">
          <div className="calm_left-title_m">
            <h1 id="calm_animated-title_m">AC</h1>
          </div>
          <div className="calm_right-title_m">
            <h1 id="calm_animated-title_m">NE?</h1>
          </div>
        </div>

        {/* Product Animation */}
        <div className="ag-product-animation-container-m-1-cm">
          <div className="ag-product-animation-canvas-div-1-cm">
            <canvas
              ref={canvasRef}
              id="ag-product-animation-canvas-1-cm"
            ></canvas>
          </div>
        </div>

        {/* Product Benefits */}
        <div className="ag-product-benefit-container-cm">
          <div className="ag-product-benefit-title-cm">
            <h2>You'll Get :</h2>
          </div>

          <ul className="ag-product-benefit-list-cm">
            <li>Deeply hydrates and nourishes the skin</li>
            <li>Rejuvenates dull & dehydrated skin</li>
            <li>Relieves dryness and itchiness</li>
            <li>Reduces signs of aging</li>
            <li>Improves skin texture</li>
            <li>Calms sensitive skin</li>
          </ul>
        </div>

        {/* Product Ingredients */}
        <div className="ag-animation-3-cm">
          <h1>Because We Used :</h1>
        </div>

        <div className="ag-product-ingredients-container-cm">
          <div className="ag-product-ingredients-container-div-cm">
            <div className="ag-product-ingredient-card-cm">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Rice_Ferment.png?v=1737023478"
                loading="lazy"
                alt="Rice Protein"
              />
              <h1>Rice Protien</h1>
              <span className="ingredient-info-cm">
                Nourishes, hydrates, and brightens the skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card-cm">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Chamomile_4f66f52b-4242-449c-9186-779555c3fa33.png?v=1737023477"
                loading="lazy"
                alt="Chamomile"
              />
              <h1>Chamomile</h1>
              <span className="ingredient-info-cm">
                Soothes and calms sensitive & acne-prone skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card-cm">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Ceramides_1.png?v=1737024418"
                loading="lazy"
                alt="Ceramides"
              />
              <h1>Ceramides</h1>
              <span className="ingredient-info-cm">
                Prevents moisture loss & improves skin barrier function.
              </span>
            </div>
            <div className="ag-product-ingredient-card-cm">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Hydromanil_9cc8bb27-3403-4f1f-b295-2af7a2797caa.png?v=1737023478"
                loading="lazy"
                alt="Hyaluronic Acid"
              />
              <h1>Hyaluronic Acid</h1>
              <span className="ingredient-info-cm">
                Locks in moisture for soft, glowing skin.
              </span>
            </div>
          </div>
        </div>

        {/* Product Results */}
        <div className="ag-animation-3-cm">
          <h1>Visible Results In 8 Weeks :</h1>
        </div>

        <div className="ag-product-result">
          <img
            className="img-small"
            src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Moisturiser-Mobile.gif?v=1736943966"
            alt=""
          />
          <img
            className="img-large"
            src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Moisturiser.gif?v=1736943648"
            alt=""
          />
        </div>


        <div className="ag-pre-order-btn-div">
          <Link className="ag-pre-order-btn"
          >Pre-Order Now</Link>
        </div>

        <div className="ag-scroll-text">
          <p>
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
            <span>|</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default CalmingMoisturizerLaunchPage;
