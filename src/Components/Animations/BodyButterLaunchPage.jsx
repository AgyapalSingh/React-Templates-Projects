import React, { useEffect, useState, useRef } from "react";
import "./AnimationCSS/BodyButterLaunchPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
        start: "top 10%",
        end: "top 5%",
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

  // const loadImage = (index) => {
  //   if (!canvasRef.current || index < 0 || index >= frames.current.maxIndex)
  //     return;

  //   const ctx = canvasRef.current.getContext("2d");
  //   const img = images[index];
  //   if (!img) return;

  //   canvasRef.current.width = window.innerWidth;
  //   canvasRef.current.height = window.innerHeight;

  //   const scale = Math.min(
  //     canvasRef.current.width / img.width,
  //     canvasRef.current.height / img.height
  //   );
  //   const newWidth = img.width * scale;
  //   const newHeight = img.height * scale;

  //   const offsetX = (canvasRef.current.width - newWidth) / 2;
  //   const offsetY = (canvasRef.current.height - newHeight) / 2;
  //   ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   ctx.imageSmoothingEnabled = true;
  //   ctx.imageSmoothingQuality = "high";

  //   ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  // };

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

        <div className="em"></div>
      </section>
    </main>
  );
};

export default BodyButterLaunchPage;
