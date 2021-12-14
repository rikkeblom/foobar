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

// TO DO/THOUGHTS:
//    - Style the fullness bar so the colors fit better

//When the beer is on tap props recieves beer, capacity, id, inUse, level, storage and taps
//When the beer is not on tap props recieves name, storage and taps
export default function Tap(props) {
  if (!props.storage) {
    return null;
  } else {
    let liters;
    let tapNumber;
    let kegs;
    let percentage;
    let figcaptionText;
    let beerNameWithoutSpaces;

    //With this next if statement we the beer we are printing is on tap or not because the data we recieve in props is different based on that
    if (props.name) {
      kegs = findArrayElementByName(props.storage, props.name);
      //since it is not on tap this will have 0 liters and 0%
      liters = 0;
      percentage = 100;
      figcaptionText = props.name;
      beerNameWithoutSpaces = props.name.replaceAll(" ", "").toLowerCase();
    } else if (props.id) {
      tapNumber = props.id + 1;
      //we are assuming each liter is 100 since there is no indicator for the meassurements
      liters = props.level / 100;
      //Here we loop through the storage array to find the right beer so we know how many kegs are left in storage
      kegs = findArrayElementByName(props.storage, props.beer);
      //Here we calculate how tall to make the tap fullness indicator
      percentage = 100 - Math.round((props.level / props.capacity) * 100);
      figcaptionText = props.beer;
      beerNameWithoutSpaces = props.beer.replaceAll(" ", "").toLowerCase();
    } else if (props.id === 0) {
      //I made this extra "else if" because id 0 was showing as false - it's the same as the previous
      tapNumber = props.id + 1;
      liters = props.level / 100;
      kegs = findArrayElementByName(props.storage, props.beer);
      percentage = 100 - Math.round((props.level / props.capacity) * 100);
      figcaptionText = props.beer;
      beerNameWithoutSpaces = props.beer.replaceAll(" ", "").toLowerCase();
    }

    const barHeight = (5.9 / 100) * percentage;
    function findArrayElementByName(array, beername) {
      return array.find((beer) => {
        if (!beer.name) {
          return null;
        } else {
          return beer.name === beername;
        }
      });
    }

    // const imageSource = `/img/labels/${beerNameWithoutSpaces}.png`;
    const altText = `label for ${figcaptionText}`;

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
      <article className="tap_article">
        <h3 style={{ display: !props.beer ? "none" : "block" }}>Tap {tapNumber}</h3>
        <div style={{ display: "flex", width: "max-content" }}>
          <div className="beer_on_tap">
            <div className="tap_visuals">
              <figure>
                <img src={imageSource} alt={altText} />
                <figcaption>{figcaptionText}</figcaption>
              </figure>
            </div>
            <div>
              <div className="line_it_up">
                <p>Tap</p>
                <p className="tap_amount">{liters} L</p>
              </div>
              <div className="line_it_up">
                <p>Kegs</p>
                <p className="keg_amount">{kegs.amount}</p>
              </div>
            </div>
          </div>
          <div className="tap_bar">
            <div className="tap_bar_status" style={{ clipPath: `inset(${percentage}% 0% 0% 0% round 10px)` }}></div>
          </div>
        </div>
      </article>
    );
  }
}
