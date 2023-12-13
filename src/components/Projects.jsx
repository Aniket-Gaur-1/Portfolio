import React from "react";

const Projects = () => {
  function handleChange() {
    window.location.href = "./#contact";
  }

  function handleClick() {
    window.location.href = "https://github.com/";
  }

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./Images/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./Images/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./Images/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={handleClick}
              >
                Live Demo
              </button>
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

export default Projects;
