import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>React (Hooks)</li>
          <li>MUI + styled-components</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>MongoDB</li>
          <li>Heroku</li>
          <li>VS Code</li>
          <li>Git (GitHub)</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
