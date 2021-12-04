import BeersForQueuedOrders from "./BeersForQueuedOrders";

//props receives beers, taps, id, order and startTime
export default function QueueOrder(props) {
  let beerArray = [];
  props.order.forEach(addToArray);
  function addToArray(beername) {
    if (beerArray.find((element) => element.beer === beername)) {
      let arrayIndex = beerArray.findIndex((element) => element.beer === beername);
      // console.log(beername + " index: " + arrayIndex);
      beerArray[arrayIndex].amount = beerArray[arrayIndex].amount + 1;
    } else {
      beerArray = beerArray.concat({ beer: beername, amount: 1 });
    }
    // console.log(beerArray);
  }
  //Now we can use the map on the new array and send the beername + amount to the next component
  const mapped = beerArray.map((beer) => <BeersForQueuedOrders beer={beer} taps={props.taps} />);

  return (
    <article className="queueOrder">
      <div>
        <button>Open Order</button>
        <h3>Table #</h3>
        <span>Timer Goes Here</span>
      </div>
      <section>{mapped}</section>
    </article>
  );
}
