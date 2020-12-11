// import React from "react";

export default function hourMin(timestamp) {
  let currentTime = new Date(timestamp);
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  } else {
    hours = hours + "";
  }
  let min = currentTime.getMinutes();

  if (min < 10) {
    min = `0${min}`;
  } else {
    min = min + ``;
  }
  return `${hours} : ${min}`;
}
