import React from "react";

export default function BackgroundImage(props) {
  let hours = props.data.date.getHours();
  if (hours <= 0 && hours <= 5) {
    return (document.body.style.backgroundImage =
      "linear-gradient(to top, #000000 0%, #080742 100%)");
  } else if (hours === 6 && hours <= 11) {
    return (document.body.style.backgroundImage = (
      <img
        className="card-img"
        src="linear-gradient(to top,  #080742 0%, #3533a1 100%)"
        alt="background"
      />
    ));
  } else if (hours === 12 && hours <= 17) {
    return (document.body.style.backgroundImage = (
      <img
        className="Background"
        src="linear-gradient(to top,  #a06c0c 0%, #c7a464 100%)"
        alt="background"
      />
    ));
  } else if ((hours) => 18 && hours <= 23) {
    return (document.body.style.backgroundImage =
      "linear-gradient(120deg, #080742 0%, #3533a1 100%)");
  }
}
