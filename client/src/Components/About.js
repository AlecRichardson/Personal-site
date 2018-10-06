import React, { Component } from "react";

import {
  Container,
  Divider,
  Button,
  Icon,
  Image,
  Modal
} from "semantic-ui-react";

import resume from "../images/resume.PNG";

import "./Css/About.css";

export default class About extends Component {
  render() {
    return (
      <Container className="about-container" textAlign="center">
        <h1 className="title"> About me. </h1>
        <Divider />
        <p className="desc">
          Full stack web developer motivated to expand and develop my skills in
          a fast changing field. Proficient in multiple different web
          technologies, demonstrating excellent communication skills, and
          working fluently in groups or independently. Education and
          understanding of web development achieved through the University of
          Missouri's engineering department and various online resources. A
          strong passion for all aspects of development and a hunger for
          success.
        </p>

        <div className="links-container">
          <a
            href="https://www.linkedin.com/in/alec-richardson/"
            target="_blank"
          >
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button>
          </a>

          <a href="https://github.com/AlecRichardson" target="_blank">
            <Button color="secondary">
              <Icon name="github" /> Github
            </Button>
          </a>

          <Modal
            trigger={
              <Button color="google plus">
                <Icon name="file" /> Resume
              </Button>
            }
          >
            <Modal.Header>Resume</Modal.Header>
            <Modal.Content>
              <Image centered src={resume} />
            </Modal.Content>
          </Modal>
        </div>
      </Container>
    );
  }
}
