import React, { Component } from "react";
// Styling
import "semantic-ui-css/semantic.min.css";
// Components
import Landing from "./Components/Landing";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Nav from "./Components/Nav";

import "./App.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-image">
          <Nav />
          <Landing />
        </div>
        <About />
        <div className="background-image-2">
          <h1 className="quote">
            The only way to do great work is to love what you do. —Steve Jobs
          </h1>
        </div>
        <Portfolio />
        <div className="background-image-3">
          <h1 className="quote">
            Believe you can and you’re halfway there. —Theodore Roosevelt
          </h1>
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
