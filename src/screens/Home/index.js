import React from "react";
import "./index.css";

function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column is-three-quarters">
          <span
            className="hola"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="ease-in-sine"
            data-aos-duration={800}
          >
            Hola!
          </span>
          <span
            className="im"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="ease-in-sine"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            I am Mahogha Harith
          </span>
          <span
            className="fine_art"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="ease-in-sine"
            data-aos-delay={750}
            data-aos-duration={1000}
          >
            Fine Art Wedding Photographer
          </span>
          <span
            className="para1"
            data-aos="fade-right"
            data-aos-offset={300}
            data-aos-easing="ease-in-sine"
            data-aos-delay={800}
            data-aos-duration={1000}
          >
            Hello! My name is Mahogha Harith and I am a talented freelance
            Wedding photographer based in Sri Lanka with a passion for capturing
            beautiful and unique images. With a keen eye for detail and a
            natural ability to compose visually striking shots, I am confident
            in my ability to capture the perfect image for any occasion. Whether
            it's a family portrait, a wedding, or a product launch, I have the
            skills and experience to deliver high-quality results that exceed
            your expectations. I am constantly striving to improve my craft and
            stay up to date with the latest photography trends and techniques. I
            am excited to work with you and help bring your vision to life
            through stunning photography.
          </span>
        </div>
      </div>
      <div
        className="button"
        style={{
          position: "absolute",
          left: "65px",
          top: "570px",
        }}
        data-aos="zoom-in"
        data-aos-duration={2500}
      >
        Hire Me
      </div>
      {/* my image */}
      <div>
        <img
          src="my_pic.png"
          className="image"
          data-aos="zoom-in"
          data-aos-duration={2500}
        />
      </div>
    </div>
  );
}

export default Home;
