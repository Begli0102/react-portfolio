import React from "react";
import "./Social.css";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className=" social">
      <div className="social-items">
        <Link to="https://github.com/Begli0102">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://linkedin.com/in/beglikakabalov">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#">
          <i class="fab fa-medium-m"></i>
        </Link>
      </div>
    </div>
  );
};

export default Social;
