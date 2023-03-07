import React from "react";
import "./index.css";

function Contact() {
  return (
    <div>
      <div
        className="main_txt"
        data-aos="fade-right"
        data-aos-offset={300}
        data-aos-easing="ease-in-sine"
        data-aos-delay={500}
        data-aos-duration={1000}
      >
        We'd love to hear from you
      </div>
      <div
        className="sub_txt"
        data-aos="fade-right"
        data-aos-offset={300}
        data-aos-easing="ease-in-sine"
        data-aos-delay={500}
        data-aos-duration={1000}
      >
        We're here to help and answer any question you might have. We look
        forward to hearing from you
      </div>
      {/* form */}
      <div className="position">
        <div
          className="field"
          data-aos="fade-left"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div
          className="field"
          data-aos="fade-left"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
          data-aos-delay={700}
          data-aos-duration={1000}
        >
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Enter your Name"
              defaultValue
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div
          className="field"
          data-aos="fade-left"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
          data-aos-delay={900}
          data-aos-duration={1000}
        >
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Enter your Email"
              defaultValue
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Type your Message Here"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
