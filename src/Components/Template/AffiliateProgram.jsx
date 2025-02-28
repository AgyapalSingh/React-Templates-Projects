import React, { useEffect, useState } from "react";

const AffiliateProgram = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social1: "",
    social2: "",
    social3: "",
    message: "",
    date: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormResponse("Submitting your response, please wait...");

    const { name, email, social1, social2, social3, message } = formData;
    const currentDate = new Date().toISOString().split("T")[0];
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("message", message);
    formDataToSend.append("social1", social1);
    formDataToSend.append("social2", social2);
    formDataToSend.append("social3", social3);
    formDataToSend.append("date", currentDate);

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
        });
        setShowAdditionalLinks(false);
        setTimeout(() => setFormResponse(""), 2000);
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
            users to apply for an affiliate program. It collects user details
            such as name, email, social media links, and a personal message
            explaining their interest. The form data is then submitted to{" "}
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

              <button className="ag-affiliate-submit-btn" type="submit">
                Submit
              </button>

              {formResponse && (
                <p className="ag-formResponse-message">{formResponse}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AffiliateProgram;
