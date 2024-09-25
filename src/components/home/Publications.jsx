import React from 'react';
import { Jumbotron } from "./migration";


const Publications = ({ heading, message, resume }) => {
    const publications = [
      { title: "Jaione Bengoetxea, Yi-Ling Chung, Marco Guerini, and Rodrigo Agerri. 2024. Basque and Spanish Counter Narrative Generation: Data Creation and Evaluation. In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024), pages 2132–2141, Torino, Italia. ELRA and ICCL."},
      { title: "Article 2", link: "#" },
      { title: "Conference Paper 3", link: "#" },
    ];
  
    return (
      <Jumbotron id="publications" className="m-0">
        <div className="container row">
          <div className="col-lg-12"> {/* Full width column */}
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            
            <ul className="lead text-center list-unstyled d-flex flex-column align-items-center">
              {publications.map((pub, index) => (
                <li key={index} className="text-center">
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