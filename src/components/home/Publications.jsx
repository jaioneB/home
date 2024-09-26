import React from 'react';
import { Jumbotron } from "./migration";

const Publications = ({ heading, message, resume }) => {
  const publications = [
    { title: "Research Paper 1", link: "#" },
    { subtitle: "Subsection 1" },
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
    { subtitle: "Subsection 2" },
    { title: "Journal Paper 4", link: "#" },
  ];

  return (
    <Jumbotron id="publications" className="m-0">
      <div className="container row">
        <div className="col-lg-12">
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>

          <ul className="lead list-unstyled">
            {publications.map((item, index) => (
              <li key={index} className="text-left" style={{ listStyleType: item.title ? "disc" : "none", marginLeft: item.title ? "20px" : "0" }}>
                {item.title ? (
                  item.link ? (
                    <a href={item.link} className="publication-link">
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )
                ) : (
                  <h4>{item.subtitle}</h4> // Render subtitle as h4
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