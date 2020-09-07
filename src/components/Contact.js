import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <Rotate bottom right cascade duration={2000}>
                <h1 style={{ fontSize: "54px", fontWeight: "700" }}>
                  Contact Us
                </h1>
              </Rotate>
              <hr
                style={{
                  width: 30,
                  height: 10,
                  backgroundColor: "black",
                  float: "left"
                }}
              ></hr>
              <ul>
                <LightSpeed left delay={2000} duration={1500}>
                  {" "}
                  <li className="insta">
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </li>
                </LightSpeed>
                <LightSpeed left delay={2200} duration={1500}>
                  <li>
                    {" "}
                    <i
                      className="fa fa-facebook"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </li>
                </LightSpeed>
                <LightSpeed left delay={2400} duration={1500}>
                  <li>
                    {" "}
                    <i
                      className="fa fa-reddit"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </li>
                </LightSpeed>
                <LightSpeed left delay={2600} duration={1500}>
                  <li>
                    {" "}
                    <i
                      className="fa fa-twitter"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </li>
                </LightSpeed>
              </ul>
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Fade top duration={2000}>
                <h1 style={{ fontWeight: "200" }}>Hi There!</h1>
              </Fade>
              <Fade top duration={2000}>
                {" "}
                <h2 style={{ fontWeight: "200" }}>You look nice today...</h2>
              </Fade>
              <Fade right delay={1000}>
                <h3 style={{ fontSize: "24px", fontWeight: "400" }}>
                  <i
                    className="fa fa-phone"
                    style={{ fontSize: "24px", padding: 15, marginTop: 30 }}
                  ></i>
                  : 0000000000
                </h3>
              </Fade>
              <Fade right delay={1500}>
                <h3 style={{ fontSize: "24px", fontWeight: "400" }}>
                  {" "}
                  <i
                    className="fa fa-envelope"
                    style={{ fontSize: "24px", padding: 12, marginTop: -30 }}
                  ></i>
                  : example@gmail.com
                </h3>
              </Fade>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    );
  }
}
