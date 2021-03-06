import elhefeLabelURL from "/img/labels/elhefe.webp";
import fairytalealeLabelURL from "/img/labels/fairytaleale.webp";
import githobLabelURL from "/img/labels/githop.webp";
import hollabacklagerLabelURL from "/img/labels/hollabacklager.webp";
import hoppilyeverafterLabelURL from "/img/labels/hoppilyeverafter.webp";
import mowintimeLabelURL from "/img/labels/mowintime.webp";
import row26LabelURL from "/img/labels/row26.webp";
import ruinedchildhoodLabelURL from "/img/labels/ruinedchildhood.webp";
import sleighrideLabelURL from "/img/labels/sleighride.webp";
import steampunkLabelURL from "/img/labels/steampunk.webp";

export default function BeersForOpenOrders(props) {
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
  let imageSource;
  const altText = `label for ${props.beer.beer}`;
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
    <article className="lable_article">
      <img src={imageSource} alt={altText} />
      <div>
        <h4>{props.beer.beer}</h4>
        <div className="line_it_up">
          <p>Amount</p>
          <div className="line1"></div>
          <p>x{props.beer.amount}</p>
        </div>
        <div className="line_it_up">
          <p>Tap</p>
          <div className="line2"></div>
          <p>{tapNumber}</p>
        </div>
      </div>
    </article>
  );
}
