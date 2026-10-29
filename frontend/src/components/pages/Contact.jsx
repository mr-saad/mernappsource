import React from "react";
import "../css/Contact.css";

const Contact = () => {
  const Form = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12 mx-auto contact">
            <h1 className="text-center">Contact</h1>
            <form
              className="contactForm"
              action="/sendToOwner"
              autoComplete="off"
              method="POST"
              onSubmit={Form}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Type Your Message..."
                  required
                  name="message"
                  className="form-control"
                ></textarea>
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  value="Submit"
                  className="btn mx-auto btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
