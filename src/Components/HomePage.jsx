import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="ag-tempalte-container">
      <h1 className="ag-template-title">
        <FaBars />
        List of Templates
      </h1>
      <section className="ag-template-section">
        <div className="ag-template-card">
          <div className="ag-template-card-image">
            <img src="" alt="img" />
          </div>

          <div className="ag-template-card-content">
            <div className="ag-template-card-info">
              <h1>Affiliate Program Page</h1>
              <span>
                Contact Form is linked to<i> <b> Google Sheet using API. </b></i>
              </span>
            </div>

            <div className="ag-template-card-btn">
              <Link to="/affiliate-program-page">
                <p>View Template</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
