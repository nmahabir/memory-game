import React from "react";

let option = "Click an Image to Begin"
let score = 0
let topScore = 0

const Nav = () => (
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      Memory Game
    </a>
    <a className="navbar-brand" href="/">
      {option}
    </a>
    <a className="navbar-brand" href="/">
      Score: {score}| Top Score: {topScore}
    </a>
  </nav>
);

export default Nav;

