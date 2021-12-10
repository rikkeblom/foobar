import { shifts } from "../settings";

export default function Colleague(props) {
  let task;
  if (props.statusDetail === "pourBeer") {
    task = "Pouring Beer";
  } else if (props.statusDetail === "recievePayment") {
    task = "Receiving Payment";
  } else if (props.statusDetail === "replaceKeg") {
    task = "Replacing Keg";
  } else if (props.statusDetail === "releaseTap") {
    task = "Releasing Tap";
  } else if (props.statusDetail === "waiting") {
    task = "Waiting";
  } else if (props.statusDetail === "startServing") {
    task = "Started Serving";
  } else if (props.statusDetail === "reserveTap") {
    task = "Reserving Tap";
  }

  return (
    <article>
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
