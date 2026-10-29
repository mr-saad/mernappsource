import React from "react";
import "../css/About.css";
import saadImg from "../../images/saad.jpg";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 about mx-auto text-center bg-dark">
            <h1 className="saad">Saad Khatri</h1>
            <p className="hobby">FullStack Developer</p>
            <img className="saadImage" src={saadImg} alt="saadKhatri" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
