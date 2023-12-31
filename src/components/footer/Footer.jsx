import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="wrapper">
          {/* <a
            href="https://twitter.com/kkrjpt"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a> */}

          <a
            href="https://www.linkedin.com/in/satyaprakash-singh-56a7b6149"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Satya057"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div style={{ color: "white", marginLeft: "10px", padding: "10px" }}>
          Created By Satyaprakash Singh| © 2022. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export { Footer };
