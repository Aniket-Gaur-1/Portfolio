import React from "react";

const Projects = () => {
  function handleChange() {
    window.location.href = "./#contact";
  }

  function handleClick() {
    window.location.href = "https://github.com/Aniket-Gaur-1/To-Do-List";
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
            <h2 className="experience-sub-title project-title">Chatroom</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {
                  window.location.href =
                    "https://github.com/Aniket-Gaur-1/Chatroom";
                }}
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
            <h2 className="experience-sub-title project-title">To Do List</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {
                  window.location.href =
                    "https://github.com/Aniket-Gaur-1/To-Do-List";
                }}
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
                src="./Images/project_3.png"
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
                onClick={() => {
                  window.location.href =
                    "https://github.com/Aniket-Gaur-1/Portfolio";
                }}
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
