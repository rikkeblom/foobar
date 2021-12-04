import QueueOrder from "./QueueOrder";

//props is receiving queue, beer and tap info
export default function QueueContainer(props) {
  //same system as for the being served section we need to map through the array
  const mapped = props.queue.map((order) => <QueueOrder beers={props.beers} taps={props.taps} {...order} key={order.id} />);

  return <section>{mapped}</section>;
}
