import { shifts } from "../settings";

import dannieURL from "/img/face/dannie.webp";
import jonasURL from "/img/face/jonas.webp";
import klausURL from "/img/face/klaus.webp";
import peterURL from "/img/face/peter.webp";

export default function Colleague(props) {
  let task;
  let color;

  //I gave the colors variables so it was easier for me to give the filter buttons the right colors
  const lavender = "#afa2d9";
  const olive = "#7dc582";
  const sky = "#72d5e5";
  const mango = "#ebc468";
  const white = "white";
  const pink = "#EB68C4";
  const pool = "#68EBCC";
  
  if (props.statusDetail === "pourBeer") {
    task = "Pouring Beer";
    color = lavender;
  } else if (props.statusDetail === "recievePayment") {
    task = "Receiving Payment";
    color = olive;
  } else if (props.statusDetail === "replaceKeg") {
    task = "Replacing Keg";
    color = sky;
  } else if (props.statusDetail === "releaseTap") {
    task = "Releasing Tap";
    color = mango;
  } else if (props.statusDetail === "waiting") {
    task = "Waiting";
    color = white;
  } else if (props.statusDetail === "startServing") {
    task = "Started Serving";
    color = pink;
  } else if (props.statusDetail === "reserveTap") {
    task = "Reserving Tap";
    color = pool;
  } 

  let face;
  
if (props.name === "Dannie") {
  face = dannieURL;
} else if (props.name === "Jonas") {
  face = jonasURL;
} else if (props.name === "Klaus") {
  face = klausURL;
}else if (props.name === "Peter") {
  face = peterURL;
}

  return (
    <article style={{backgroundColor: `${color}`}}>
      <img src={face} alt="Employee" />
      <div>
        <h4>{props.name}</h4>
        <p>Shift: {shifts[props.name]}</p>
        <p>
          {props.status}: {task}
        </p>
      </div>
      <span>Timer</span>
    </article>
  );
}
