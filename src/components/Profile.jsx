import React from "react";

const Profile = () => {
  function handleClick() {
    window.open("./Images/resume-example.pdf");
  }

  function handleChange() {
    window.location.href = "./#contact";
  }

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./Images/profile-pic.png" alt="Aniket picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Aniket</h1>
        <p className="section__text__p2">Frontend Developer</p>
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
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./Images/github.png"
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
