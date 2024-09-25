import React from 'react';
import { Jumbotron } from "./migration";


const Publications = ({ heading, message, resume, specific }) => {
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
            
            <ul className="lead text-center">
              {publications.map((pub, index) => (
                <li key={index}>
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