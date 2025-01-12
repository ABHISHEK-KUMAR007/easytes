import React from "react";
import "./About.css";
import foto from "../../image/foto.jpg"

import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={foto}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello! I'm a passionate Blockchain and MERN Stack Developer with a knack for building cutting-edge applications that seamlessly blend innovation and user experience. My expertise lies in developing decentralized solutions, creating scalable web applications, and leveraging the power of blockchain technology to solve real-world problems.

I enjoy working on projects that challenge me to think creatively, from building smart contracts to crafting efficient back-end systems and responsive front-end designs. Whether it's implementing peer-to-peer energy marketplaces or revolutionizing event ticketing with NFTs, I thrive on pushing the boundaries of technology.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
