import React, { useEffect, useState, useRef } from "react";
import "./AnimationCSS/TintedLaunchPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TintedLaunchPage = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".title-part-Hook-1", {
      opacity: 0,
      scale: 1.5,
      scrollTrigger: {
        trigger: ".ag-launch-page-title",
        start: "top 5%",
        end: "top 0%",
        scrub: 1,
      },
    })
      .to(".title-part-Hook-2", {
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top 0%",
          end: "top -15%",
          scrub: 1,
        },
      })
      .to(".title-part-Hook-2", {
        opacity: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top -15%",
          end: "top -20%",
          scrub: 1,
        },
      })
      .to(".title-part-Hook-3", {
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top -20%",
          end: "top -35%",
          scrub: 1,
        },
      })
      .to(".title-part-Hook-3", {
        opacity: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top -35%",
          end: "top -40%",
          scrub: 1,
        },
      })
      .to(".title-part-Hook-4", {
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top -40%",
          end: "top -55%",
          scrub: 1,
        },
      })
      .to(".title-part-Hook-4", {
        opacity: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".ag-launch-page-title",
          start: "top -55%",
          end: "top -60%",
          scrub: 1,
        },
      });
  }, []);

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
        trigger: ".ag-product-animation-canvas-div-1",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage(Math.floor(frames.current.currentIndex)),
    });
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-launch-page-container">
        <div className="ag-launch-page-title">
          <div className="ag-launch-title-part title-part-Hook-1">
            <h1>Tinted</h1>
          </div>

          <div className="ag-launch-title-part title-part-Hook-2">
            <h1>Just</h1>
          </div>

          <div className="ag-launch-title-part title-part-Hook-3">
            <h1>Got</h1>
          </div>

          <div className="ag-launch-title-part title-part-Hook-4">
            <h1>Better</h1>
          </div>
        </div>

        <div className="ag-animation-1">
          <h1>Animation For Title - 2</h1>
        </div>

        <div className="ag-product-animation-container-m-1">
          <div className="ag-product-animation-canvas-div-1">
            <canvas ref={canvasRef} id="ag-product-animation-canvas-1"></canvas>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TintedLaunchPage;
