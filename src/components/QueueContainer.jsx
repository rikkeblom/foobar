import QueueOrder from "./QueueOrder";

//props is receiving queue, beer and tap info
export default function QueueContainer(props) {
  //same system as for the being served section we need to map through the array

  //adding a static queued order for styling purposes
  const dataPlusFakeOrder = props.queue.concat({ id: 1000000, order: ["Ruined Childhood", "Steampunk", "Steampunk"] });

  const mapped = dataPlusFakeOrder.map((order) => <QueueOrder beers={props.beers} taps={props.taps} {...order} key={order.id} />);
  return <section className="queue_container">{mapped}</section>;
}
