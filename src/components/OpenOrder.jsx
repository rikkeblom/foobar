import BeersForOpenOrders from "./BeersForOpenOrders";

//props gets bartenders, beers and taps
export default function OpenOrder(props) {
  //Here we find the bartender's name by searching for the order number they are working on
  if (!props.bartenders) {
    return null;
  } else {
    let server = findArrayElementByID(props.bartenders, props.id);

    function findArrayElementByID(array, id) {
      return array.find((bartender) => {
        if (!bartender.servingCustomer) {
          return null;
        } else {
          return bartender.servingCustomer === id;
        }
      });
    }

    //Here we map out the beers that are in the order and print them as seperate components
    //            const mapped = props.order.map((beer) => <BeersForOpenOrders />);
    // However, first we need to figure out how to add together the beer orders of the same type
    // We do that by making a new array and then checking for each beer in the order if there already is a beer of that type.
    // If there isn't, we add it to the array and set the amount to 1. If there is, we find the index of it and increment the amount by one.
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
    const mapped = beerArray.map((beer) => <BeersForOpenOrders beer={beer} taps={props.taps} key={beer.beer} />);

    return (
      <article className="served_article">
        <button className="table_button">
          <h3>Table #</h3>
          <span>V</span>
        </button>
        <section>
          <p className="server_name">{server.name}</p>
          {mapped}
        </section>
      </article>
    );
  }
}
