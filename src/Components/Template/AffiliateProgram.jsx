import React, { useState } from "react";
import "./TemplateCSS/AffiliateProgram.css";

const AffiliateProgram = () => {
  const [step, setStep] = useState(1);
const [formResponseColor, setFormResponseColor] = useState("green");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social1: "",
    social2: "",
    social3: "",
    message: "",
    followers: "",
    influencerCategory: "",
    monthlyReach: "",
    avgLikes: "",
    avgComments: "",
    avgShares: "",
    howYouHear: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [showAdditionalLinks, setShowAdditionalLinks] = useState(false);
  const [formResponse, setFormResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep1 = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.social1 ||
      !formData.message
    ) {
      setFormResponse("Please fill in all required fields before proceeding.");
      setFormResponseColor("red");
      setTimeout(() => {
        setFormResponse("");
        setFormResponseColor("green"); // Reset to green after hiding
      }, 2000);
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormResponse("Submitting your response, please wait...");

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(
        import.meta.env.VITE_AFFILIATE_PROGRAM_SHEET_ID,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setFormResponse("Thank you! Your submission has been received.");
        setFormData({
          name: "",
          email: "",
          social1: "",
          social2: "",
          social3: "",
          message: "",
          followers: "",
          influencerCategory: "",
          monthlyReach: "",
          avgLikes: "",
          avgComments: "",
          avgShares: "",
          howYouHear: "",
        });
        setShowAdditionalLinks(false);
        setTimeout(() => setFormResponse(""), 1000);
        setStep(1);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      setFormResponse("An error occurred while submitting. Please try again.");
    }
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-affiliate-container">
        <div className="ag-affiliate-info">
          <h1>Join our Affiliate program</h1>
          <p className="ag-affiliate-info-para">
            The AffiliateProgram component is a React-based form that allows
            users to apply for an affiliate program for a{" "}
            <span>Skincare brand (Or You can use anywhere else.)</span>. It
            collects user details such as name, email, social media links, and a
            personal message explaining their interest. The form data is then
            submitted to{" "}
            <span> Google Sheets using the Google Sheets API </span> for easy
            tracking and management.
          </p>

          <table border="1" cellPadding="10" cellSpacing="0">
            <thead className="ag-affiliate-tHead">
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Google Sheets Integration</strong>
                </td>
                <td>
                  Submits form data directly to Google Sheets via the Google
                  Sheets API.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Dynamic Input Fields</strong>
                </td>
                <td>Users can add or remove extra social media links.</td>
              </tr>
              <tr>
                <td>
                  <strong>Real-Time Feedback</strong>
                </td>
                <td>
                  Displays submission status messages for better user
                  experience.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Automatic Date Logging</strong>
                </td>
                <td>Captures the submission date automatically.</td>
              </tr>
              <tr>
                <td>
                  <strong>Error Handling</strong>
                </td>
                <td>
                  Provides appropriate feedback in case of submission failure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="ag-affiliate-form-container">
          <div className="ag-affiliate-form">
            <h1>Affiliate Program</h1>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="ag-affiliate-step-1 ag-affiliate-step">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Social Link 1:</label>
                  <input
                    type="text"
                    name="social1"
                    value={formData.social1}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="add-more-links"
                    onClick={() => setShowAdditionalLinks(!showAdditionalLinks)}
                  >
                    {showAdditionalLinks ? "Remove Links" : "Add More Links"}
                  </button>
                  {showAdditionalLinks && (
                    <div className="additional-links">
                      <label>Social Link 2 (Optional):</label>
                      <input
                        type="text"
                        name="social2"
                        value={formData.social2}
                        onChange={handleChange}
                      />

                      <label>Social Link 3 (Optional):</label>
                      <input
                        type="text"
                        name="social3"
                        value={formData.social3}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  <label>Why work with us?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us why you'd like to join..."
                  />
                  <input type="hidden" name="date" value={formData.date} />
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ag-affiliate-next-step-btn"
                  >
                    Next &gt;
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="ag-affiliate-step-2 ag-affiliate-step">
                  <label>How Many Followers Do You Have ?</label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-</option>
                    <option value="0 < 5,000">0 &lt; 5,000</option>
                    <option value="5,000 < 10,000">5,000 &lt; 10,000</option>
                    <option value="10,000 < 50,000">10,000 &lt; 50,000</option>
                    <option value="50,000 < 100,000">
                      50,000 &lt; 100,000
                    </option>
                    <option value="100,000 +">100,000 +</option>
                  </select>

                  <label>What category do you belong ?</label>
                  <select
                    id="influencerCategory"
                    name="influencerCategory"
                    value={formData.influencerCategory}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-</option>
                    <option value="Beauty & Fashion">Beauty & Fashion</option>
                    <option value="Food & Cooking">Food & Cooking</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="Travel & Adventure">
                      Travel & Adventure
                    </option>
                    <option value="Parenting & Family">
                      Parenting & Family
                    </option>
                    <option value="Lifestyles & Home Decor">
                      Lifestyles & Home Decor
                    </option>
                    <option value="Tech & Gadgets">Tech & Gadgets</option>
                  </select>

                  <label>Monthly Reach ?</label>
                  <select
                    id="monthlyReach"
                    name="monthlyReach"
                    value={formData.monthlyReach}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-</option>
                    <option value="0 < 5,000">0 &lt; 5,000</option>
                    <option value="5,000 < 10,000">5,000 &lt; 10,000</option>
                    <option value="10,000 < 50,000">10,000 &lt; 50,000</option>
                    <option value="50,000 < 100,000">
                      50,000 &lt; 100,000
                    </option>
                    <option value="100,000 +">100,000 +</option>
                  </select>

                  <label>
                    Average Post Likes <i>(Optional)</i>:
                  </label>
                  <input
                    type="number"
                    id="avgLikes"
                    name="avgLikes"
                    value={formData.avgLikes}
                    onChange={handleChange}
                  />

                  <label>
                    Average Post Comments <i>(Optional)</i>:
                  </label>
                  <input
                    type="number"
                    id="avgComments"
                    name="avgComments"
                    value={formData.avgComments}
                    onChange={handleChange}
                  />

                  <label>
                    Average Post Shares <i>(Optional)</i>:
                  </label>
                  <input
                    type="number"
                    id="avgShares"
                    name="avgShares"
                    value={formData.avgShares}
                    onChange={handleChange}
                  />

                  <label>How did you hear about us ? </label>
                  <select
                    id="howYouHear"
                    name="howYouHear"
                    value={formData.howYouHear}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Website">Website</option>
                  </select>

                  <input type="hidden" id="date" name="date" />

                  <button
                    type="button"
                    onClick={handlePrev}
                    className="ag-affiliate-prev-step-btn"
                  >
                    &lt; Previous 
                  </button>

                  <button className="ag-affiliate-submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              )}

              <div className="ag-response-div">
                {formResponse && (
                  <p className="ag-formResponse-message" style={{ color: formResponseColor }}>{formResponse}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AffiliateProgram;
