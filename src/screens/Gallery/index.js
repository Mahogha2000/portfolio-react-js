import React from "react";
import "./index.css";

function Gallery() {
  return (
    <div>
      <div className="gallery" data-aos="zoom-in" data-aos-duration={2500}>
        GALLERY
      </div>
      <div className="position">
        <div
          className="slideshow-container"
          data-aos="zoom-in"
          data-aos-duration={2500}
        >
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="./2.JPG" style={{ width: "100%" }} />
            <div className="text" />
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="./3.jpg" style={{ width: "100%" }} />
            <div className="text" />
          </div>
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="./4.jpg" style={{ width: "100%" }} />
            <div className="text" />
          </div>
          {/* Next and previous buttons */}
          <a className="prev" onclick="plusSlides(-1)">
            ❮
          </a>
          <a className="next" onclick="plusSlides(1)">
            ❯
          </a>
        </div>
        <br />
        {/* The dots/circles */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onclick="currentSlide(1)" />
          <span className="dot" onclick="currentSlide(2)" />
          <span className="dot" onclick="currentSlide(3)" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
