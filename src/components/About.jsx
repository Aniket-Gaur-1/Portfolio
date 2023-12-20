import React from "react";

const About = () => {
  function handleChange() {
    window.location.href = "./#experience";
  }

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./Images/about-img.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="./Images/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                1+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="./Images/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.C.A 2020-2023
                <br />
                M.C.A 2023-present
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              An aspiring front-end developer currently pursuing an MCA degree
              and holding a BCA degree. Proficient in HTML, CSS, JavaScript, and
              React.js, I'm passionate about crafting engaging web experiences.
              Eager to learn and adapt to new technologies, I thrive on staying
              updated with the latest trends in the ever-evolving tech world.
              Outside of coding, I enjoy contributing to open-source projects
              and exploring the cinematic realm through movies.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./Images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleChange}
      />
    </section>
  );
};

export default About;
