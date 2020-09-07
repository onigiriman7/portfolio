import React, { Component } from "react";
import "./App.css";
import "animate.css/animate.min.css";
import Galleria from "./components/Galleria";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function App() {
  return <ScrollExample />;
}
class ScrollExample extends Component {
  render() {
    return (
      <div>
        <section className="Landing">
          <Zoom>
            <h1
              style={{
                fontSize: "200px",
                fontFamily: "'Anton', sans-serif",
                position: "absolute",
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
                top: "24%",

                color: "white"
              }}
            >
              SHUT UP
            </h1>
          </Zoom>
          <Fade delay={1000} duration={1500}>
            <h5
              style={{
                margin: 0,
                color: "white",
                fontFamily: "'Anton', sans-serif",
                position: "absolute",
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
                top: "80%"
              }}
            >
              Scroll to start
            </h5>
          </Fade>
        </section>
        <section id="portfolio" className="portfolio">
          <Main />
          <div style={{ height: 200 }}></div>
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
