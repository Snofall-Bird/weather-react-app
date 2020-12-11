import React from "react";

export default function Clock() {
  setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    } else {
      hours = hours + "";
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    } else {
      minutes = minutes + ``;
    }
    let formatTime = `${hours}:${minutes}`;

    document.querySelector("#clock").innerHTML = formatTime;
  }, 10000);
  return null;
}
