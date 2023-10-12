import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [language, setLanguage] = useState();
  const [jobs, setJobs] = useState([]);

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    console.log(language);
    fetch(
      "https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&category=Data%20and%20Analytics&category=Data%20Science&category=Design%20and%20UX&category=IT&category=Software%20Engineer&category=Software%20Engineering&page=20"
    )
      .then((res) => res.json())
      .then((data) => setJobs(data.results));
  };

  const navigate = useNavigate();
  const goToJob = (job) => {
    navigate("/jobdetails", {
      state: {
        Requirement: job.name,
        company: job.company.name,
        companyUrl: job.refs.landing_page,
      },
    });
  };

  return (
    <div>
      <center>
        <h1 style={{marginTop:'40px'}}>Find Your Dream Job Based On Language</h1>
        <form onSubmit={OnSubmitHandler}>
          <input
            id="text"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          ></input>
          <input id="search" type="submit" value="Search"></input>
        </form>
        <div className="row">
          {jobs.length >= 1
            ? jobs
                .filter((job) => {
                  const regex = new RegExp(`\\b${language}\\b`, "i");
                  return regex.test(job.contents);
                })
                .map((job, index) => (
                  <div className="col-md-3" key={job.id}>
                    <div
                      className="card"
                      style={{ width: "18rem", padding: "5px", margin: "10px" }}
                    >
                      <div className="card-body" style={{ backgroundColor:"wheat"}}>
                        <h4 className="card-title">{job.company.name}</h4>
                        <p>
                          {" "}
                          {job.locations.map((locations) => locations.name)}
                        </p>
                        <p style={{ fontSize: "20px", fontWeight: "Bold" }}>
                          {" "}
                          {job.categories.map((category) => category.name)}
                        </p>
                        <button
                          onClick={() => goToJob(job)}
                          className="btn btn-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            : null}
        </div>
      </center>
    </div>
  );
};

export default LandingPage;
