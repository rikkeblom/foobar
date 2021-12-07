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
      percentage = 0;
      figcaptionText = props.name;
      beerNameWithoutSpaces = props.name.replaceAll(" ", "").toLowerCase();
    } else if (props.id) {
      tapNumber = props.id + 1;
      //we are assuming each liter is 100 since there is no indicator for the meassurements
      liters = props.level / 100;
      //Here we loop through the storage array to find the right beer so we know how many kegs are left in storage
      kegs = findArrayElementByName(props.storage, props.beer);
      //Here we calculate how tall to make the tap fullness indicator
      percentage = Math.round((props.level / props.capacity) * 100);
      figcaptionText = props.beer;
      beerNameWithoutSpaces = props.beer.replaceAll(" ", "").toLowerCase();
    } else if (props.id === 0) {
      //I made this extra "else if" because id 0 was showing as false - it's the same as the previous
      tapNumber = props.id + 1;
      liters = props.level / 100;
      kegs = findArrayElementByName(props.storage, props.beer);
      percentage = Math.round((props.level / props.capacity) * 100);
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

    const imageSource = `src/img/labels/${beerNameWithoutSpaces}.png`;

    return (
      <article className="tap_article">
        <h3 style={{ display: !props.beer ? "none" : "block" }}>Tap {tapNumber}</h3>
        <div className="beer_on_tap">
        
        <div className="tap_visuals">
          <figure>
            <img src={imageSource} alt="Beer" />
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
      </article>
    );
  }
}
