import React, { Component } from "react";
import axios from 'axios';

import "./Css/Contact.css";

import { Container, Divider, Form, Button } from "semantic-ui-react";

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       subject: '',
       message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleEmailSubmit = e => {
    e.preventDefault();

    const { email, subject, message } = this.state;

    const form = await axios.post('/api/form', {
     email, subject, message
    })
  }
  
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
            <Form onSubmit={this.handleEmailSubmit}>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" type ='email' name='email' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Subject</label>
                <input placeholder="Subject" type ='text' name='subject' onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <input placeholder="message" type="textarea" name='message' onChange={this.handleChange}/>
              </Form.Field>
              
                <Button type="submit" color="blue">
                  Submit
                </Button>
             
            </Form>
          </Container>
        </div>
      </Container>
    );
  }
}
