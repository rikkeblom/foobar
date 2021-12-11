import Tap from "./Tap";
//props recieves taps, storage and beers

//this is where we need to sort the beers based on whether they are on tap or not
//perhaps we can:
//    1) map all the beers on tap -done
//    2) check which beers are not on tap by comparing against the full list
//    3) print each list seperately

export default function TapStatus(props) {
  const mappedOnTap = props.taps.map((tap) => <Tap taps={props.taps} storage={props.storage} {...tap} key={tap.id} />);

  //next let's find the beers that are not on tap.
  //we loop through the full list of beers (10) checking each one if it is in the tap array - else we add it to a new array - we should end up having 3 elements in the array
  let beersNotOnTapArray = [];
  props.beers.map(addToArray);
  function addToArray(beerFromFullList) {
    if (props.taps.find((element) => element.beer === beerFromFullList.name)) {
    } else if (props.taps.find((element) => element.beer !== beerFromFullList.name)) {
      beersNotOnTapArray = beersNotOnTapArray.concat({ ...beerFromFullList });
    }
  }
  const mappedNotOnTap = beersNotOnTapArray.map((beer) => <Tap taps={props.taps} storage={props.storage} {...beer} key={beer.name} />);

  return (
    <section className="tap">
      <h2>Tap Status</h2>
      <section className="on_tap">{mappedOnTap}</section>
      <section>
        <h4> Not on Tap </h4>
        <div className="off_tap">{mappedNotOnTap}</div>
      </section>
    </section>
  );
}
