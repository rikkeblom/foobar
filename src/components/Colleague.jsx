import { shifts } from "../settings";

export default function Colleague(props) {
  let task;
  let color;

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
    task = sky;
    color = "#72d5e5";
  } else if (props.statusDetail === "releaseTap") {
    task = mango;
    color = "#ebc468";
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
  //need a color for the emloyees doing nothing

  return (
    <article style={{backgroundColor: `${color}`}}>
      <img src="#" alt="Employee" />
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
