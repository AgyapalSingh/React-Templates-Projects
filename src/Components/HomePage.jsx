import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../Data/Data.json";

const HomePage = () => {
  return (
    <main className="ag-tempalte-container">
      <h1 className="ag-template-title">
        <FaBars />
        List of Templates
      </h1>

      <section className="ag-template-section">
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

              <div className="ag-template-card-btn">
                <Link to={`/${item.linkTo}`}>
                  <p>View Template</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* <section className="ag-template-section">
        <div className="ag-template-card">
          <div className="ag-template-card-image">
            <img src={IMG1} alt="img" />
          </div>

          <div className="ag-template-card-content">
            <div className="ag-template-card-info">
              <h1>{data.title}</h1>
              <span>
                Contact Form is linked to
                <i>
                  {" "}
                  <b> Google Sheet using API. </b>
                </i>
              </span>
            </div>

            <div className="ag-template-card-btn">
              <Link to="/affiliate-program-page">
                <p>View Template</p>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HomePage;
