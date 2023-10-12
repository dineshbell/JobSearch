import React, { useState } from "react";
import "../App.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetterNote: "",
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <center>
        <div className="success-page form-container"  style={{margin:'20px'}}>
          <h2>Application Submitted Successfully!</h2>
          <h3 style={{marginBottom:'30px'}}>Preview</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Cover Letter Note:</strong> {formData.coverLetterNote}
          </p>
          <p>
            <strong>Resume:</strong>{" "}
            {formData.resume ? formData.resume.name : "N/A"}
          </p>
        </div>
      </center>
    );
  }

  return (
    <center>
    <div className="form-container" style={{margin:'20px'}}>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label>Cover Letter Note:</label>
        <textarea
          name="coverLetterNote"
          value={formData.coverLetterNote}
          onChange={handleChange}
        ></textarea>
        <br />

        <label>Resume:</label>
        <input type="file" onChange={handleFileChange} />
        <br />

        <button type="submit">Apply</button>
      </form>
    </div>
    </center>
  );
};

export default Apply;
