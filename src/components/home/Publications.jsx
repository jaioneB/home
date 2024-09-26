import React from 'react';
import { Jumbotron } from "./migration";

const Publications = ({ heading, message, resume }) => {
  const publications = [
    { subtitle: "Publications" },
    { title: "Jaione Bengoetxea, Yi-Ling Chung, Marco Guerini, and Rodrigo Agerri. 2024. Basque and Spanish Counter Narrative Generation: Data Creation and Evaluation. In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024), pages 2132–2141, Torino, Italia. ELRA and ICCL.", link: "https://aclanthology.org/2024.lrec-main.192/" },

    { subtitle: "Theses" },
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
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
              <li
                key={index}
                className="text-left"
                style={{
                  listStyleType: item.title ? "disc" : "none",
                  marginLeft: item.title ? "20px" : "0",
                  marginTop: item.subtitle ? "30px" : "0", // Add space before subtitles
                }}
              >
                {item.title ? (
                  item.link ? (
                    <a href={item.link} className="publication-link">
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )
                ) : (
                  <h4 style={{ fontWeight: "bold" }}>{item.subtitle}</h4> // Render subtitle as bold
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