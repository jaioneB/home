import React from 'react';
import { Jumbotron } from "./migration";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";


const Publications = () => {
  const publications = [
    { title: "Research Paper 1"},
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
  ];

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
    <Container className="">
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <Row>
        {projectsArray.length
          ? projectsArray.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))
          : dummyProjectsArr.map((project, index) => (
            <ProjectCard
              key={`dummy-${index}`}
              id={`dummy-${index}`}
              value={project}
            />
          ))}
      </Row>
    </Container>
  </Jumbotron>
  );
};

export default Publications;