import React from "react";
import "./Projects.css";
import votingImage from '../../image/voting.png';
import stakingimage from '../../image/staking.png';
import Events from '../../image/event.png';

import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        {/* <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p> */}
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                <h1>decentralised voting application</h1>

                  <img
                    src={votingImage}
                    alt="voting project"
                    />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Solodity</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Ether.js</span>
                  <span className="card-detail-badge">Netamask</span>
                </div>
                <div className="card-body text-center">
                  <a
                    className="ad-btn"
                    href="https://github.com/ABHISHEK-KUMAR007/assessment_voting"
                    >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <h1>decentralised voting application</h1>
                <img
                    src={stakingimage}
                    alt="project2"
                    />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Solodity</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Ether.js</span>
                  <span className="card-detail-badge">Netamask</span>
                </div>
                <div className="card-body text-center">
                  
                  <a
                    className="ad-btn"
                    href="https://github.com/ABHISHEK-KUMAR007/staking_platform"
                    >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                    <h1>decentralised voting application</h1>
                  <img
                    src={Events}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Solodity</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Ether.js</span>
                  <span className="card-detail-badge">Netamask</span>
                </div>
                <div className="card-body text-center">
                  <a className="ad-btn" href="https://github.com/ABHISHEK-KUMAR007/ticketSystem">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
