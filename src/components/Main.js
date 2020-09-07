import React from "react";
import Third from "./Third";
import image from "../static/image1.jpg";

var leftElements = [
  {
    align: "1",
    date: "Jan 2020",
    text:
      "jasncajs sjcksaca asjc asjc jscnsjanc saicsacas csajncsac jc sjac jscjsa jscjsN jsCNJscn asjc ajscj",
    imgSrc: image
  },
  {
    align: "0",
    date: "Feb 2020",
    text: "Phase 2",
    imgSrc:
      "https://www.pngitem.com/pimgs/m/267-2675591_gold-cup-trophy-golden-cup-png-transparent-png.png"
  },
  {
    align: "1",
    date: "Mar 2020",
    text:
      "jasncajs sjcksaca asjc asjc jscnsjanc saicsacas csajncsac jc sjac jscjsa jscjsN jsCNJscn asjc ajscj",
    imgSrc: image
  },
  {
    align: "0",
    date: "April 2020",
    text: "Phase 2",
    imgSrc:
      "https://www.pngitem.com/pimgs/m/267-2675591_gold-cup-trophy-golden-cup-png-transparent-png.png"
  },
  {
    align: "1",
    date: "May 2020",
    text:
      "jasncajs sjcksaca asjc asjc jscnsjanc saicsacas csajncsac jc sjac jscjsa jscjsN jsCNJscn asjc ajscj",
    imgSrc: image
  },
  {
    align: "0",
    date: "June 2020",
    text:
      "jasncajs sjcksaca asjc asjc jscnsjanc saicsacas csajncsac jc sjac jscjsa jscjsN jsCNJscn asjc ajscj",
    imgSrc:
      "https://www.pngitem.com/pimgs/m/267-2675591_gold-cup-trophy-golden-cup-png-transparent-png.png"
  },
  {
    align: "1",
    date: "July 2020",
    text:
      "jasncajs sjcksaca asjc asjc jscnsjanc saicsacas csajncsac jc sjac jscjsa jscjsN jsCNJscn asjc ajscj",
    imgSrc: image
  },

  {
    align: "0",
    date: "Aug 2020",
    text: "Phase 2",
    imgSrc:
      "https://www.pngitem.com/pimgs/m/267-2675591_gold-cup-trophy-golden-cup-png-transparent-png.png"
  },
  {
    align: "1",
    date: "Sep 2020",
    text: "Phase 2",
    imgSrc: image
  },
  {
    align: "0",
    date: "Oct 2020",
    text: "Phase 3",
    imgSrc:
      "https://www.pngitem.com/pimgs/m/267-2675591_gold-cup-trophy-golden-cup-png-transparent-png.png"
  }
];

function Main() {
  const left = leftElements.map(element => (
    <Third
      align={element.align}
      date={element.date}
      text={element.text}
      imgSrc={element.imgSrc}
    />
  ));

  return <div>{left}</div>;
}

export default Main;
