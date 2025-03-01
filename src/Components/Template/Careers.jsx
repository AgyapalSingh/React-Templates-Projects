import { useState, useEffect, useRef } from "react";
import "./TemplateCSS/Careers.css";
import Jobs from "./../../Data/CurrentOpenings.json";

const JobsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    jobname: "",
    file: null,
    date: "",
  });

  const [fileError, setFileError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef(null);
  const jobSelectRef = useRef(null);
  const [readMore, setReadMore] = useState({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date: new Date().toISOString().split("T")[0],
    }));
  }, []);

  const handleReadMore = (jobId) => {
    setReadMore((prev) => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  const handleApply = (jobTitle) => {
    setFormData((prev) => ({
      ...prev,
      jobname: jobTitle,
    }));

    document
      .getElementById("ag-Form-Section")
      .scrollIntoView({ behavior: "smooth" });

    if (jobSelectRef.current) {
      jobSelectRef.current.style.border = "3px solid #183457";
      setTimeout(() => (jobSelectRef.current.style.border = ""), 2000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setFileError("File size should not exceed 5MB.");
      e.target.value = "";
      setTimeout(() => setFileError(""), 3000);
    } else {
      setFileError("");
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("Submitting your response, please wait...");

    if (formData.file) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.file);
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (key !== "file") data.append(key, value);
        });
        data.append("file", base64String);
        data.append("fileName", formData.file.name);

        try {
          const response = await fetch(import.meta.env.VITE_CAREERS_SHEET_ID, {
            method: "POST",
            body: data,
          });
          const result = await response.json();

          if (result.result === "success") {
            setResponseMessage("Thank you! Your submission has been received.");
            formRef.current.reset();
            setTimeout(() => setResponseMessage(""), 2000);
          } else {
            setResponseMessage("Error: " + result.message);
          }
        } catch (error) {
          setResponseMessage("Submission failed. Try again later.");
        }
      };
    }
  };

  return (
    <main className="ag-tempalte-container">
      <section className="ag-job-container">
        <div className="ag-job-info">
          <h1>Join Our Perfect Team</h1>
          <p className="ag-job-info-para">
            The Careers component is a React-based form that allows users to
            apply for Jobs for a
            <span>Skincare brand (Or You can use anywhere else.)</span>. It
            collects user details such as name, email, resume{" "}
            <span>
              (Uploaded to Google Drive using Drive Api and the link generated
              send to Google Sheet)
            </span>{" "}
            and a personal message explaining their interest. The form data is
            then submitted to{" "}
            <span> Google Sheets using the Google Sheets API </span> for easy
            tracking and management.
          </p>

          <table border="1" cellSpacing="0" cellPadding="10">
            <thead className="ag-job-tHead">
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Job Listing & Apply Button</strong>
                </td>
                <td>
                  Displays job openings from a JSON data source. <br></br> Users can click
                  "Apply Here" to auto-fill the form and scroll to the
                  application section.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Google Sheets Integration</strong>
                </td>
                <td>
                  Submits job application details directly to Google Sheets for
                  tracking and management.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Google Drive File Upload</strong>
                </td>
                <td>
                  Uploads resume files (PDF, JPEG, JPG) to Google Drive and
                  stores the file link in Google Sheets.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Auto selection of Job, Scroll & Highlighting</strong>
                </td>
                <td>
                  Clicking "Apply Here" smoothly scrolls to the form and
                  highlights the job dropdown for visibility.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Read More Toggle</strong>
                </td>
                <td>
                  Expands or collapses job descriptions for better readability.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Real-time Validation</strong>
                </td>
                <td>
                  Ensures the file size does not exceed 5MB and provides
                  feedback on submission status.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Automatic Date Logging</strong>
                </td>
                <td>Automatically records the application submission date.</td>
              </tr>
              <tr>
                <td>
                  <strong>Error Handling & Feedback</strong>
                </td>
                <td>
                  Displays success, failure, or file size error messages for a
                  better user experience.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ag-current-openings-container">
          <h1>Current Job Openings</h1>
          <div className="ag-current-openings-all">
            {Jobs.map((job) => (
              <div key={job.id} className="ag-current-openings ">
                <h2 className="ag-current-openings-title">{job.title}</h2>
                <h5 className="ag-current-openings-exper">
                  Experience - {job.experience}
                </h5>
                <p className="ag-current-openings-desp">
                  {job.description}
                  <span
                    style={{ display: readMore[job.id] ? "none" : "inline" }}
                  >
                    ...
                  </span>
                  <span
                    style={{ display: readMore[job.id] ? "inline" : "none" }}
                  >
                    {job.description2}
                  </span>
                </p>
                <button
                  onClick={() => handleReadMore(job.id)}
                  className="desc-readmoreBtn"
                >
                  {readMore[job.id] ? "Read Less" : "Read More"}
                </button>
                <a
                  href="#ag-Form-Section"
                  className="ag-current-openings-apply-btn "
                  onClick={() => handleApply(job.title)}
                >
                  Apply Here
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="ag-Form-Section" className="ag-job-form-container">
          <div className="ag-job-form">
            <h1>Connect With Us</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                required
              />

              <label>Message (Optional):</label>
              <textarea name="message" onChange={handleInputChange}></textarea>

              <label>Choose a job:</label>
              <select
                id="jobname"
                name="jobname"
                onChange={handleInputChange}
                value={formData.jobname}
                ref={jobSelectRef}
                required
              >
                <option value="">Please Select Your Job</option>
                {Jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>

              <label>Upload Resume (PDF, JPEG, JPG):</label>
              <input
                type="file"
                accept=".pdf,.jpeg,.jpg"
                onChange={handleFileChange}
                required
              />
              {fileError && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {fileError}
                </div>
              )}

              <button className="ag-job-submit-btn" type="submit">
                Submit
              </button>

              {responseMessage && (
                <p className="ag-Job-response-message">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobsForm;
