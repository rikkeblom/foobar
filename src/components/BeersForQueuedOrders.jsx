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
  const imageSource = `/img/labels/${beerNameWithoutSpaces}.png`;
  const altText = `label for ${props.beer.beer}`;

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
