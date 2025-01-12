import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.h2
          className="col-12 mt-3 mb-1 text-center text-uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies Stack
        </motion.h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming Languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
