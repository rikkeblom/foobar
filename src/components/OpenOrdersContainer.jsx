import OpenOrder from "./OpenOrder";
// run a "for each" on all open tickets
// props gets bartenders, beers, serving and taps

export default function OpenOrdersContainer(props) {
  const mapped = props.serving.map((order) => <OpenOrder bartenders={props.bartenders} beers={props.beers} taps={props.taps} {...order} key={order.id} />);

  return <section>{mapped}</section>;
}
