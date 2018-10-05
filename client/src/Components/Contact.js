import React, { Component } from "react";

import "./Css/Contact.css";

import { Container, Divider, Form, Button } from "semantic-ui-react";

export default class Contact extends Component {
  render() {
    return (
      <Container className="contact-container" textAlign="center">
        <h1 className="title"> Contact. </h1>
        <Divider />
        <p className="desc">
          Have any questions about employment or business opportunities? Feel
          free to send an email at admin@alecrichardson.me
        </p>
        <div className="email">
          <Container>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <input placeholder="Subject" />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <textarea type="text" placeholder="Message" />
              </Form.Field>
              <a href="mailto:alec.richardson@mail.missouri.edu">
                <Button type="submit" color="blue">
                  Submit
                </Button>
              </a>
            </Form>
          </Container>
        </div>
      </Container>
    );
  }
}
