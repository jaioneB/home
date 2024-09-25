import React from 'react';
import { Jumbotron } from "./migration";


const Publications = ({ heading, username, length, specfic }) => {
  const publications = [
    { title: "Research Paper 1"},
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
  ];

  return (
    <Jumbotron id="aboutme" className="m-0">
    <div className="container row">
      <div className="col-5 d-none d-lg-block align-self-center">
        {showPic && (
          <img
            className="border border-secondary rounded-circle"
            src={profilePicUrl}
            alt="profilepicture"
            width={imgSize}
            height={imgSize}
          />
        )}
      </div>
      <div className={`col-lg-${showPic ? "7" : "12"}`}>
        <h2 className="display-4 mb-5 text-center">{heading}</h2>
        <p className="lead text-center">{message}</p>
        {resume && (
          <p className="lead text-center">
            <a
              className="btn btn-outline-dark btn-lg"
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume/CV"
            >
              Resume
            </a>
          </p>
        )}
      </div>
    </div>
  </Jumbotron>
  );
};

export default Publications;