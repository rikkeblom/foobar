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

  return (
    <article className="lable_article">
      <img src="#" alt="BeerLabel" />
      <div>
        <h4>{props.beer.beer}</h4>
        <div className="line_it_up">
          <p>Amount</p>
          <div className="line1"></div>
          <p>{props.beer.amount}</p>
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
