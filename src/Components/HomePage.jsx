import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/TemplateData.json";
import animationData from "../Data/AnimationData.json"

const HomePage = () => {
  return (
    <main className="ag-tempalte-container">
      <h1 className="ag-template-title">List of Templates</h1>

      <section className="ag-template-section">
        <div className="ag-template-card-container">
          {data.map((item, index) => (
            <div className="ag-template-card" key={index}>
              <div className="ag-template-card-image">
                {item.img && <img src={item.img} alt={item.title} />}
              </div>

              <div className="ag-template-card-content">
                <div className="ag-template-card-info">
                  <h1>{item.title}</h1>
                  <span>
                    Contact Form is linked to
                    <i>
                      {" "}
                      <b>{item["description-2"]}</b>
                    </i>
                  </span>
                </div>
              </div>

              <div className="ag-template-card-btn">
                <Link to={`/${item.linkTo}`}>
                  <p>View Template</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      <h1 className="ag-template-title">List of Animations</h1>


      <section className="ag-template-section">
        <div className="ag-template-card-container">
          {animationData.map((item, index) => (
            <div className="ag-template-card" key={index}>
              <div className="ag-template-card-image">
                {item.img && <img src={item.img} alt={item.title} />}
              </div>

              <div className="ag-template-card-content">
                <div className="ag-template-card-info">
                  <h1>{item.title}</h1>
                  <span>
                  {item["description"]}
                    <i>
                      {" "}
                      <b>{item["description-2"]}</b>
                    </i>
                  </span>
                </div>
              </div>

              <div className="ag-template-card-btn">
                <Link to={`/${item.linkTo}`}>
                  <p>View Template</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default HomePage;
