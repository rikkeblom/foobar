import elhefeLabelURL from "/img/labels/elhefe.png";
import fairytalealeLabelURL from "/img/labels/fairytaleale.png";
import githobLabelURL from "/img/labels/githop.png";
import hollabacklagerLabelURL from "/img/labels/hollabacklager.png";
import hoppilyeverafterLabelURL from "/img/labels/hoppilyeverafter.png";
import mowintimeLabelURL from "/img/labels/mowintime.png";
import row26LabelURL from "/img/labels/row26.png";
import ruinedchildhoodLabelURL from "/img/labels/ruinedchildhood.png";
import sleighrideLabelURL from "/img/labels/sleighride.png";
import steampunkLabelURL from "/img/labels/steampunk.png";

//props receives beer(.amount & .beer) og taps

export default function BeersForQueuedOrders(props) {
  //we need to find the tap number for the beer by looking through the tap names, finding the right one and taking that id +1
  let tap = findArrayElementByName(props.taps, props.beer.beer);
  function findArrayElementByName(array, name) {
    return array.find((beer) => {
      if (!beer) {
        return null;
      } else {
        return beer.beer === name;
      }
    });
  }
  let tapNumber = tap.id + 1;
  const beerNameWithoutSpaces = props.beer.beer.replaceAll(" ", "").toLowerCase();
  // const imageSource = `/img/labels/${beerNameWithoutSpaces}.png`;
  const altText = `label for ${props.beer.beer}`;

  let imageSource;
  if (beerNameWithoutSpaces === "elhefe") {
    imageSource = elhefeLabelURL;
  } else if (beerNameWithoutSpaces === "fairytaleale") {
    imageSource = fairytalealeLabelURL;
  } else if (beerNameWithoutSpaces === "githop") {
    imageSource = githobLabelURL;
  } else if (beerNameWithoutSpaces === "hollabacklager") {
    imageSource = hollabacklagerLabelURL;
  } else if (beerNameWithoutSpaces === "hoppilyeverafter") {
    imageSource = hoppilyeverafterLabelURL;
  } else if (beerNameWithoutSpaces === "mowintime") {
    imageSource = mowintimeLabelURL;
  } else if (beerNameWithoutSpaces === "row26") {
    imageSource = row26LabelURL;
  } else if (beerNameWithoutSpaces === "ruinedchildhood") {
    imageSource = ruinedchildhoodLabelURL;
  } else if (beerNameWithoutSpaces === "sleighride") {
    imageSource = sleighrideLabelURL;
  } else if (beerNameWithoutSpaces === "steampunk") {
    imageSource = steampunkLabelURL;
  }

  return (
    <article className="beer_queue_article">
      <div className="queue_beer">
        <img src={imageSource} alt={altText} />
        <div>
          <h4>{props.beer.beer}</h4>
          <p>x{props.beer.amount}</p>
        </div>
      </div>
      <div className="queue_tap">
        <img src="/img/icons/red_tap.png" alt="Tap" />
        <p>{tapNumber}</p>
      </div>
    </article>
  );
}
