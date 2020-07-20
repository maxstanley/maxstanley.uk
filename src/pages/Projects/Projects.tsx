import React from "react";

import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Take a look over at my
        <a href="https://github.com/maxstanley">GitHub</a>
{' '}
to see some of the
        things that I am working on.
</p>
      <p className="project-list">Some highlights:</p>
      <ul className="project-list">
        <li>
          <a href="https://github.com/maxstanley/dh-c-p-server">
            DHCP Server (C)
          </a>
{" "}
          - A simple DHCP Server written in C
        </li>
        <li>
          <a href="https://github.com/maxstanley/Hangman">Hangman (C)</a>
{' '}
- A
          Networked game of Hangman for the CLI, written in C
</li>
        <li>
          <a href="https://github.com/maxstanley/ordering">Ordering (MERN)</a>
{' '}
-{" "}
          - A live ordering system designed for restaurants and pubs, using the
          MEAN stack as well as Web Sockets for live updating. Using Docker to
          containerise the services.
        </li>
      </ul>
    </div>
  );
}
