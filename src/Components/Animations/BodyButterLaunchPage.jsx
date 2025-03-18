import React, { useEffect, useRef } from "react";
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
        start: "top 35%",
        end: "top 20%",
        scrub: 1,
      },
    });

    return () => {
      tl_product_title.kill();
    };
  }, []);

  return (
    <main className="ag-tempalte-container">
      <section className="ag-launch-page-container-bb">
        <div className="bb-product-title">
          <h1 id="bb-animated-title" ref={titleRef}>
            A.S.M.B.B
          </h1>
        </div>

        <div className="ag-product-animation-container-bb">
          <div className="ag-product-animation-canvas-div-bb">
            <canvas id="ag-product-animation-canvas-bb"></canvas>
          </div>
        </div>

        <div className="em"></div>
      </section>
    </main>
  );
};

export default BodyButterLaunchPage;
