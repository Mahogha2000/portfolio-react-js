import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <div>
      <div className="about_me" data-aos="zoom-in-up" data-aos-duration={1500}>
        About Me
      </div>
      <div className="para2" data-aos="zoom-in-down" data-aos-duration={1500}>
        {" "}
        I'm a wedding photographer based in Sri Lanka with the experience of two
        years in the field. My extensive experience has allowed me to hone my
        skills in capturing candid, authentic moments as well as posed group
        shots. I am skilled in using lighting and composition to create visually
        stunning images that capture the energy and atmosphere of the event. I
        am also proficient in post-processing techniques to ensure that the
        final images are of the highest quality. In addition to my technical
        skills, I am also a detail-oriented and organized professional who is
        able to work efficiently under pressure. I am confident in my ability to
        deliver high-quality images that perfectly capture the essence of your
        event.
      </div>
      {/* <button class="button is-hovered" id="button2">Hire Me</button> */}
      <div className="button" data-aos="zoom-in-down" data-aos-duration={1000}>
        <span className="overflow">Hire Me</span>
      </div>
    </div>
  );
}

export default AboutMe;
