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
        trigger: ".ag-product-animation-canvas-div-1",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage(Math.floor(frames.current.currentIndex)),
    });
  };

  // Canvas 2
  const canvasRef_2 = useRef(null);
  const [images_2, setImages_2] = useState([]);
  const frames_2 = useRef({ currentIndex_2: 0, maxIndex_2: 65 });

  useEffect(() => {
    const preloadImages_2 = async () => {
      let loadedImages_2 = [];
      let imagesLoaded_2 = 0;

      for (let i = 0; i < frames_2.current.maxIndex_2; i++) {
        const imageUrl_2 = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
          .toString()
          .padStart(3, "0")}.png?v=1737009142`;

        const img_2 = new Image();
        img_2.src = imageUrl_2;
        img_2.onload = () => {
          imagesLoaded_2++;
          if (imagesLoaded_2 === frames_2.current.maxIndex_2) {
            setImages_2(loadedImages_2);
          }
        };
        loadedImages_2.push(img_2);
      }
    };

    preloadImages_2();
  }, []);

  useEffect(() => {
    if (images_2.length === frames_2.current.maxIndex_2) {
      loadImage_2(0);
      startAnimation_2();
    }
  }, [images_2]);

  const loadImage_2 = (index) => {
    if (
      !canvasRef_2.current ||
      index < 0 ||
      index >= frames_2.current.maxIndex_2
    )
      return;
    const ctx_2 = canvasRef_2.current.getContext("2d");
    const img_2 = images_2[index];
    if (!img_2) return;

    canvasRef_2.current.width = 300;
    canvasRef_2.current.height = 500;
    const scaleX_2 = canvasRef_2.current.width / img_2.width;
    const scaleY_2 = canvasRef_2.current.height / img_2.height;
    const scale_2 = Math.max(scaleX_2, scaleY_2);
    const newWidth_2 = img_2.width * scale_2;
    const newHeight_2 = img_2.height * scale_2;
    const offsetX_2 = (canvasRef_2.current.width - newWidth_2) / 2;
    const offsetY_2 = (canvasRef_2.current.height - newHeight_2) / 2;

    ctx_2.clearRect(
      0,
      0,
      canvasRef_2.current.width,
      canvasRef_2.current.height
    );
    ctx_2.imageSmoothingEnabled = true;
    ctx_2.imageSmoothingQuality = "high";
    ctx_2.drawImage(img_2, offsetX_2, offsetY_2, 300, 500);
  };

  const startAnimation_2 = () => {
    gsap.to(frames_2.current, {
      currentIndex_2: frames_2.current.maxIndex_2 - 1,
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-2",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage_2(Math.floor(frames_2.current.currentIndex_2)),
    });
  };

  // Canvas 2
  const canvasRef_3 = useRef(null);
  const [images_3, setImages_3] = useState([]);
  const frames_3 = useRef({ currentIndex_3: 0, maxIndex_3: 65 });

  useEffect(() => {
    const preloadImages_3 = async () => {
      let loadedImages_3 = [];
      let imagesLoaded_3 = 0;

      for (let i = 0; i < frames_3.current.maxIndex_3; i++) {
        const imageUrl_3 = `https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Calming_Sunscreen_${i
          .toString()
          .padStart(3, "0")}.png?v=1737009142`;

        const img_3 = new Image();
        img_3.src = imageUrl_3;
        img_3.onload = () => {
          imagesLoaded_3++;
          if (imagesLoaded_3 === frames_3.current.maxIndex_3) {
            setImages_3(loadedImages_3);
          }
        };
        loadedImages_3.push(img_3);
      }
    };

    preloadImages_3();
  }, []);

  useEffect(() => {
    if (images_3.length === frames_3.current.maxIndex_3) {
      loadImage_3(0);
      startAnimation_3();
    }
  }, [images_3]);

  const loadImage_3 = (index) => {
    if (
      !canvasRef_3.current ||
      index < 0 ||
      index >= frames_3.current.maxIndex_3
    )
      return;
    const ctx_3 = canvasRef_3.current.getContext("2d");
    const img_3 = images_3[index];
    if (!img_3) return;

    canvasRef_3.current.width = 300;
    canvasRef_3.current.height = 500;
    const scaleX_3 = canvasRef_3.current.width / img_3.width;
    const scaleY_3 = canvasRef_3.current.height / img_3.height;
    const scale_3 = Math.max(scaleX_3, scaleY_3);
    const newWidth_3 = img_3.width * scale_3;
    const newHeight_3 = img_3.height * scale_3;
    const offsetX_3 = (canvasRef_3.current.width - newWidth_3) / 2;
    const offsetY_3 = (canvasRef_3.current.height - newHeight_3) / 2;

    ctx_3.clearRect(
      0,
      0,
      canvasRef_3.current.width,
      canvasRef_3.current.height
    );
    ctx_3.imageSmoothingEnabled = true;
    ctx_3.imageSmoothingQuality = "high";
    ctx_3.drawImage(img_3, offsetX_3, offsetY_3, 300, 500);
  };

  const startAnimation_3 = () => {
    gsap.to(frames_3.current, {
      currentIndex_3: frames_3.current.maxIndex_3 - 1,
      scrollTrigger: {
        trigger: ".ag-product-animation-canvas-div-3",
        start: "top 45%",
        end: "top 10%",
        scrub: 1,
      },
      onUpdate: () => loadImage_3(Math.floor(frames_3.current.currentIndex_3)),
    });
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-launch-page-container">
        {/* Animated Title */}
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

        {/* Animation 1 */}
        <div className="ag-animation-1">
          <h1>Animation 1</h1>
        </div>
        <div className="ag-product-animation-container-m-1">
          <div className="ag-product-animation-canvas-div-1">
            <canvas ref={canvasRef} id="ag-product-animation-canvas-1"></canvas>
          </div>
        </div>

        {/* Animation 2 */}
        <div className="ag-animation-2">
          <h1>Animation 2</h1>
        </div>
        <div className="ag-product-animation-container-m-2">
          <div className="ag-product-animation-canvas-div-2">
            <canvas
              ref={canvasRef_2}
              id="ag-product-animation-canvas-2"
            ></canvas>
          </div>
        </div>

        {/* Animation 3 */}
        <div className="ag-animation-3">
          <h1>Animation 3</h1>
        </div>
        <div className="ag-product-animation-container-m-3">
          <div className="ag-product-animation-canvas-div-3">
            <canvas
              ref={canvasRef_3}
              id="ag-product-animation-canvas-3"
            ></canvas>
          </div>
        </div>

        {/* Ingredients */}
        <div className="ag-animation-3">
          <h1>Because We Used :</h1>
        </div>

        <div className="ag-product-ingredients-container">
          <div className="ag-product-ingredients-container-div">
            <div className="ag-product-ingredient-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Rice_Ferment.png?v=1737023478"
                loading="lazy"
                alt="Rice Protein"
              />
              <h1>Rice Protien</h1>
              <span className="ingredient-info">
                Nourishes, hydrates, and brightens the skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Chamomile_4f66f52b-4242-449c-9186-779555c3fa33.png?v=1737023477"
                loading="lazy"
                alt="Chamomile"
              />
              <h1>Chamomile</h1>
              <span className="ingredient-info">
                Soothes and calms sensitive & acne-prone skin.
              </span>
            </div>
            <div className="ag-product-ingredient-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Ceramides_1.png?v=1737024418"
                loading="lazy"
                alt="Ceramides"
              />
              <h1>Ceramides</h1>
              <span className="ingredient-info">
                Prevents moisture loss & improves skin barrier function.
              </span>
            </div>
            <div className="ag-product-ingredient-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0589/0192/1956/files/Hydromanil_9cc8bb27-3403-4f1f-b295-2af7a2797caa.png?v=1737023478"
                loading="lazy"
                alt="Hyaluronic Acid"
              />
              <h1>Hyaluronic Acid</h1>
              <span className="ingredient-info">
                Locks in moisture for soft, glowing skin.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TintedLaunchPage;
