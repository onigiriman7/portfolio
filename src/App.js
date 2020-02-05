import React, { Component } from "react";
import "./App.css";
import Galleria from "./components/Galleria";
import Contact from "./components/Contact";

function App() {
  return <ScrollExample />;
}
class ScrollExample extends Component {
  render() {
    return (
      <div>
        <section className="Landing">
          <h1 style={{ margin: 0 }}>LANDING</h1>
        </section>
        <section id="portfolio" className="portfolio">
          <div style={{ height: "50vh" }}>
            <h1 style={{ margin: 0 }}>PORTFOLIO</h1>
          </div>
        </section>
        <section className="imgGallery">
          <Galleria />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;

/*  */
