import React from "react";

import "./Projects.css";

interface projectItem {
  title: string;
  link: string;
  description: string;
  language: string;
}

export default function Projects() {
  const projects: projectItem[] = [
    {
      title: "DHCP Server",
      language: "C",
      link: "https://github.com/maxstanley/dh-c-p-server",
      description: "A simple DHCP Server written in C",
    },
    {
      title: "Hangman",
      language: "C",
      link: "https://github.com/maxstanley/Hangman",
      description: "A Networked game of Hangman for the CLI, written in C",
    },
    {
      title: "Ordering",
      language: "MERN",
      link: "https://github.com/maxstanley/ordering",
      description:
        "A live ordering system designed for restaurants and pubs, using the MEAN stack as well as Web Sockets for live updating. Using Docker to containerise the services.",
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <p>
        Take a look over at my
        <a href="https://github.com/maxstanley"> GitHub </a>
        to see some of the things that I am working on.
      </p>
      <p className="project-list">Some highlights:</p>
      <ul className="project-list">
        {projects.map((item: projectItem) => (
          <li>
            <a href={item.link}>
              {item.title} ({item.language})
              {/* Linting insists it goes here? */}
{" "}
            </a>
            - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
