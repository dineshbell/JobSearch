import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "90px",
        backgroundColor: "wheat",
        borderRadius: "10px",
      }}
    >
      <center>
        <h2 style={{ color: "#696761" }}>{location.state.Requirement}</h2>
        <p>
          <span style={{ fontWeight: "bold" }}>Company</span> :{" "}
          {location.state.company}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Website</span> :{" "}
          {location.state.companyUrl}
        </p>
        <span>
          <NavLink
            to="/apply"
            className="text-decoration-none text-light mb-5 mx-4"
          >
            <button> Apply</button>
          </NavLink>
        </span>
      </center>
    </div>
  );
};

export default JobDetails;
