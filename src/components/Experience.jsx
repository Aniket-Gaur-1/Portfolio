import React from "react";

const Experience = () => {
  function handleChange() {
    window.location.href = "./#projects";
  }
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./Images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./Images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img
                  src="./Images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="./Images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React Js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src="./Images/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
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

export default Experience;
