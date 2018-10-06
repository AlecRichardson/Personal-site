import React, { Component } from "react";
// import Hamburger from "react-hamburgers";

import "./Css/Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.home = 0;

    this.state = {
      active: false,
      isTop: true
    };
  }

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
      this.home = document
        .querySelector(".background-image")
        .getBoundingClientRect().y;
      console.log(this.home);
    });
  };

  getClass = () => {};

  handleMenuClick = name => {
    document
      .querySelector(name)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    console.log(this.home);
    return (
      <nav className={this.state.isTop ? "nav" : "nav  nav-background"}>
        {/* <Hamburger
          className="hamburger"
          active={this.state.active}
          type="slider"
          onClick={() => this.setState({ active: !this.state.active })}
        />

        <button className="hamburger hamburger--boring" type="button" /> */}
        <ul className="nav-list">
          <li className={this.home > -999 ? "nav-item" : "nav-item"}>
            <a onClick={() => this.handleMenuClick(".background-image")}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => this.handleMenuClick(".about-container")}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => this.handleMenuClick(".portfolio-container")}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => this.handleMenuClick(".contact-container")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
