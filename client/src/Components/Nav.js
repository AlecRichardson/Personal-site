import React, { Component } from "react";

import "./Css/Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.home = 0;

    this.state = {
      activeItem: "home",
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

    // var about = document
    //   .querySelector(".about-container")
    //   .getBoundingClientRect().y;
    // var portfolio = document
    //   .querySelector(".portfolio-container")
    //   .getBoundingClientRect().y;
    // var contact = document
    //   .querySelector(".contact-container")
    //   .getBoundingClientRect().y;
    // console.log(
    //   "home",
    //   this.home,
    //   "about",
    //   about,
    //   "portfolio",
    //   portfolio,
    //   "contact",
    //   contact
    // );
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
