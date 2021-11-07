import React from "react";
import "./About.css";

const About = () => {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const age = calculate_age(new Date(1989, 9, 2));

  return (
    <div className="about">
      <h1>Bio</h1>
      <p>
        My name is Sahar Cohen, {age} years old, lives in Netivot.
        <br /> I have a bachelor's degree in computer science and recently
        completed a Web Bootcamp.
        <br /> Looking for my first foothold as a Frontend/Web Developer, I have
        a high motivation to learn, specialize and succeed.
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
