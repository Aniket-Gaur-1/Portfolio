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
            src="./Images/about-pic.png"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
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
