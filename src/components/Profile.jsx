import React from "react";

const Profile = () => {
  function handleClick() {
    window.open("./Images/Aniket Resume.pdf");
  }

  function handleChange() {
    window.location.href = "./#contact";
  }

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./Images/profile-pic-1.png" alt="Aniket picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Aniket</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleClick}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleChange}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./Images/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/aniket-gaur-/";
            }}
          />
          <img
            src="./Images/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => {
              window.location.href = "https://github.com/Aniket-Gaur-1";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
