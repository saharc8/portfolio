import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Sahar</p>
          <p>Web developer</p>
        </h1>
        <Link to="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div>
        <img
          className="person"
          src={`${process.env.PUBLIC_URL}/me.png`}
          alt="person pic"
        />
      </div>
    </div>
  );
};

export default Home;
