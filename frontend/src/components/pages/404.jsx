import React from "react";
import "../css/404.css";

const Err404 = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 col-md-12 Err404 mx-auto">
          <img
            className="img-fluid"
            src="https://miro.medium.com/max/700/1*hFwwQAW45673VGKrMPE2qQ.png"
            alt="404 not found"
          />
          <div className="button text-center mt-3">
            <a className="btn btn-warning" href="/">
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Err404;
