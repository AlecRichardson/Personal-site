import React, { Component } from "react";
import { Container, Divider, Button, Reveal } from "semantic-ui-react";

import "./Css/Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <Container className="portfolio-container" textAlign="center">
        <h1 className="title"> Portfolio. </h1>
        <Divider />
        <div className="projects-container">
          <div className="project-1">
            <div className="hover">
              <h1 className="outline">Delivery-Z</h1>
              <div className="links">
                <a
                  href="https://github.com/ShawnStewart/Delivery-App"
                  target="_blank"
                >
                  <Button content="Learn more" />
                </a>
                <a href="https://www.alecrichardson.me:5050/" target="_blank">
                  <Button content="View project" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-2">
            <div className="hover">
              <h1 className="outline">Text Editor</h1>
              <div className="links">
                <a
                  href="https://github.com/AlecRichardson/Text-Editor"
                  target="_blank"
                >
                  <Button content="Learn more" />
                </a>
                <Button content="View project" disabled />
              </div>
            </div>
          </div>

          <div className="project-3">
            <div className="hover">
              <h1 className="outline">Calories Count</h1>
              <div className="links">
                <a
                  href="https://github.com/AlecRichardson/CS3380-Final-Project"
                  target="_blank"
                >
                  <Button content="Learn more" />
                </a>
                <Button content="View project" disabled />
              </div>
            </div>
          </div>

          <div className="project-4">
            <div className="hover">
              <h1 className="outline">Blackjack</h1>
              <div className="links">
                <Button content="Learn more" disabled />
                <Button content="View project" disabled />
              </div>
            </div>
          </div>
          <div className="project-5">
            <div className="hover">
              <h1 className="outline">Checkers</h1>
              <div className="links">
                <a
                  href="https://github.com/AlecRichardson/Checkers"
                  target="_blank"
                >
                  <Button content="Learn more" />
                </a>
                <Button content="View project" disabled />
              </div>
            </div>
          </div>
          <div className="project-6">
            <div className="hover">
              <h1 className="outline">CPU Monitor</h1>
              <div className="links">
                <Button content="Learn more" disabled />
                <Button content="View project" disabled />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
