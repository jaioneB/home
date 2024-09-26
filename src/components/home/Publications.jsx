import React from 'react';
import { Jumbotron } from "./migration";

const Publications = ({ heading, message, resume }) => {
  const publications = [
    { title: "Research Paper 1", link: "#" },
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
  ];

  return (
    <Jumbotron id="publications" className="m-0">
      <div className="container row">
        <div className="col-lg-12"> {/* Full width column */}
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>

          {/* Left-align and add bullet points */}
          <ul className="lead list-unstyled">
            {publications.map((pub, index) => (
              <li key={index} className="text-left" style={{ listStyleType: "disc", marginLeft: "20px" }}>
                {pub.link ? (
                  <a href={pub.link} className="publication-link">
                    {pub.title}
                  </a>
                ) : (
                  <span>{pub.title}</span>
                )}
              </li>
            ))}
          </ul>

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