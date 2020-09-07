import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

const Styles1 = styled.div`
  hr {
    margin-left: 180px;
    width: 265px;
    margin-top: -110px;
  }
`;
const Styles2 = styled.div`
  hr {
    margin-left: -250px;
    width: 265px;
    margin-top: -110px;
  }
`;

export default class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      imgSrc: props.imgSrc,
      text: props.text,
      align: props.align
    };
  }
  render() {
    if (this.state.align == 1) {
      return (
        <Styles1>
          <div>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
              style={{ marginLeft: 710 }}
            >
              <h1 style={{ opacity: 0.5, color: "black" }}>
                {this.state.date}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
              duration="4"
              style={{ marginLeft: 1000 }}
            >
              <h2 className="thirdText">{this.state.text}</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              animateOnce={true}
              style={{ marginLeft: 400 }}
            >
              <img className="thirdImg" src={this.state.imgSrc} />
            </ScrollAnimation>
          </div>
        </Styles1>
      );
    } else {
      return (
        <Styles2>
          <div style={{ marginTop: 150 }}>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
              style={{ marginLeft: 730 }}
            >
              <h1 style={{ opacity: 0.5, color: "black" }}>
                {this.state.date}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce={true}
              duration="4"
              style={{ marginLeft: 1100 }}
            >
              <img className="fourthImg" src={this.state.imgSrc} />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="bounceOutLeft"
              animateOnce={true}
              style={{ marginTop: 35 }}
            >
              <h2 className="fourthText">{this.state.text}</h2>
            </ScrollAnimation>
          </div>
        </Styles2>
      );
    }
  }
}
