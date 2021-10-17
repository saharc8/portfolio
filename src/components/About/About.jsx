import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Bio</h1>
      <p>
        My name is Sahar Cohen, 31 years old, lives in Netivot.
        <br /> I have a bachelor's degree in computer science and recently also
        completed a Web Bootcamp.
        <br /> Looking for my first foothold in the web world, I have a high
        motivation to learn, specialize and succeed.
        <br /> This is my portfolio site, here you can see my projects, a links
        to social networks and more . .
        <br /> I would happy to hear from you.
      </p>
      <br />
      <h1>My projects</h1>
      <div className="projects">
        <section className="project">
          <p>Fasion store</p>
          <img
            src={`${process.env.PUBLIC_URL}/lavi-fashion.png`}
            alt="store-pic"
            className="project-pic"
            onClick={() => {
              window.open("https://gocode-shop-server.herokuapp.com/");
            }}
          />
        </section>
        <section className="project">
          <p>Pads player</p>
          <img
            src={`${process.env.PUBLIC_URL}/pads-player.png`}
            alt="pads-pic"
            className="project-pic"
            onClick={() => {
              window.open("https://pads-player.herokuapp.com/");
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default About;
