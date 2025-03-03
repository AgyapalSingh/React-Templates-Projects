import React, { useEffect } from "react";
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
            <canvas id="ag-product-animation-canvas-1"></canvas>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TintedLaunchPage;
