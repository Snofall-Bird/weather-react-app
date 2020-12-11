// import React from "react";

export default function cardinalPoint(response) {
  let cardinalPoint = response;
  if (cardinalPoint > 0 && cardinalPoint <= 45) {
    cardinalPoint = "NNE";
  } else if (cardinalPoint > 45 && cardinalPoint <= 90) {
    cardinalPoint = "ENE";
  } else if (cardinalPoint > 90 && cardinalPoint <= 135) {
    cardinalPoint = "ESE";
  } else if (cardinalPoint > 135 && cardinalPoint <= 180) {
    cardinalPoint = "SSE";
  } else if (cardinalPoint > 180 && cardinalPoint <= 225) {
    cardinalPoint = "SSW";
  } else if (cardinalPoint > 225 && cardinalPoint <= 270) {
    cardinalPoint = "WSW";
  } else if (cardinalPoint > 270 && cardinalPoint <= 360) {
    cardinalPoint = "NNW";
  }
  return cardinalPoint;
}
