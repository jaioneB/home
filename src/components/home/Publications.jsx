import React from 'react';

const Publications = () => {
  const publications = [
    { title: "Research Paper 1", link: "#" },
    { title: "Article 2", link: "#" },
    { title: "Conference Paper 3", link: "#" },
  ];

  return (
    <div>
      <h2>Publications</h2>
      <ul>
        {publications.map((pub, index) => (
          <li key={index}>
            <a href={pub.link}>{pub.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;