import React from "react";
// import ReactTypingEffect from 'react-typing-effect';
import "./Home.css";

const Home = () => {
  return (
    <section id="intro">
      <div className="intro container">
        <div>
          <h1>
            Hi there...<span></span>
          </h1>
          <h1>
            I am a <span></span>
          </h1>
          <h1>
            {" "}
            Frontend Developer<span></span>
          </h1>
          {/* <a href="https://begli0102.github.io/React-portfolio/about" tape='button' className="btn">Learn more</a> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
