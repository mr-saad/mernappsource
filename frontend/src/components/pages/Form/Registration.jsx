import React from "react";
import "../../css/Registration.css";
import axios from "../../../axios";
import { useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const [Registration, setRegistration] = React.useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [records, setRecords] = React.useState([]);

  const Change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setRegistration({ ...Registration, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();

    const newRecord = { ...Registration, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);

    setRegistration({
      username: "",
      email: "",
      password: "",
      cpassword: "",
    });

    var response = axios.post("/register", newRecord);
    if (response) {
      console.log("sent to backend!!");
      history.push("/");
    }
  };

  const toastFunc = () => {
    toast.dark("yehh.. it worked. A yummy Toast!!", {
      position: "top-right",
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-12 mx-auto registration">
            <form
              className="regForm"
              action="/register"
              method="post"
              onSubmit={Submit}
              autoComplete="off"
            >
              <h1 className="text-center mb-4">
                <span className="heading">Sign Up</span>
              </h1>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={Registration.username}
                  onChange={Change}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  value={Registration.email}
                  onChange={Change}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={Registration.password}
                  onChange={Change}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  required
                  value={Registration.cpassword}
                  onChange={Change}
                />
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mx-auto"
                />
              </div>
              <button onClick={toastFunc} className="btn btn-primary">
                click me to test a Toast!!
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Registration;
