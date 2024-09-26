import React from 'react';
import { Jumbotron } from "./migration";

const Publications = ({ heading, message, resume }) => {
  const name = "Jaione Bengoetxea"; // Replace with your actual name
  const publications = [
    { subtitle: "Publications" },
    { title: "Basque and Spanish Counter Narrative Generation: Data Creation and Evaluation. Jaione Bengoetxea, Yi-Ling Chung, Marco Guerini, and Rodrigo Agerri (2024). In Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024), pages 2132–2141, Torino, Italia. ELRA and ICCL.", link: "https://aclanthology.org/2024.lrec-main.192/" },
    { title: "HiTZ@ Disargue: Few-shot Learning and Argumentation to Detect and Fight Misinformation in Social Media. Rodrigo Agerri, Jeremy Barnes, Jaione Bengoetxea, Blanca Calvo Figueras, Joseba Fernandez de Landa, Iker García-Ferrero, Olia Toporkov, and Irune Zubiaga (2024). In Proceedings of the Seminar of the Spanish Society for Natural Language Processing: Projects and System Demonstrations (SEPLN-CEDI-PD 2024), pages 118-123, A coruña, Spain", link: "https://ceur-ws.org/Vol-3729/p28_rev.pdf" },
    
    { subtitle: "Theses" },
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
                  marginTop: item.subtitle ? "30px" : "0",
                }}
              >
                {item.title ? (
                  <>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.title.replace(
                          new RegExp(name, "g"),
                          `<strong style="font-weight: bold;">${name}</strong>`
                        ),
                      }}
                    />
                    {item.link && (
                      <>
                        {" "}
                        (<a href={item.link} className="publication-link">
                          Link
                        </a>)
                      </>
                    )}
                  </>
                ) : (
                  <h4 style={{ fontWeight: "bold" }}>{item.subtitle}</h4>
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