import React, { Component } from "react";
import axios from "axios";

import "./Css/Contact.css";

import {
  Container,
  Divider,
  Form,
  Button,
  Input,
  Loader
} from "semantic-ui-react";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      subject: "",
      message: "",
      success: null,
      loader: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmailSubmit = e => {
    e.preventDefault();

    const { email, subject, message } = this.state;

    const form = axios
      .post("/api/form", {
        email,
        subject,
        message
      })
      .then(response => {
        this.setState({ loader: response.data.loader });
        console.log(response.data);
        this.setState({ success: response.data });
        this.setState({ email: "", subject: "", message: "", errors: {} });
        console.log(response.data);
        this.setState({ loader: response.data.loader });
      })
      .catch(err => {
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <Container className="contact-container" textAlign="center">
        <h1 className="title"> Contact. </h1>
        <Divider />
        <p className="desc">
          Have any questions about employment or business opportunities? Feel
          free to send an email at alecwrichardson@gmail.com
        </p>
        <div className="email">
          <Container>
            <Form onSubmit={this.handleEmailSubmit}>
              <Form.Field>
                <label>Email</label>
                <Input
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className={errors.email ? "error" : ""}
                />
                <div className="invalid">
                  {this.state.errors.email ? this.state.errors.email : ""}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <Input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  className={errors.subject ? "error" : ""}
                />
                <div className="invalid">
                  {this.state.errors.subject ? this.state.errors.subject : ""}
                </div>
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <textarea
                  placeholder="message"
                  type="textarea"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <div className="invalid">
                  {this.state.errors.message ? this.state.errors.message : ""}
                </div>
              </Form.Field>

              <Button type="submit" color="blue">
                Submit
              </Button>
              {this.state.loader ? <Loader active inline="centered" /> : ""}
              {this.state.success ? (
                <div className="success">
                  Your email has been sent successfully.
                </div>
              ) : (
                ""
              )}
            </Form>
          </Container>
        </div>
      </Container>
    );
  }
}
