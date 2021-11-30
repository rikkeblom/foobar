//Make tap number only show if it's a beer in use

export default function Tap() {
  return (
    <article>
      <h3>Tap #</h3>
      <div>
        <figure>
          <img src="#" alt="BeerLabelGoesHere" />
          <figcaption>Beer Name</figcaption>
        </figure>
        <div>The thing showing how much is left in the current keg goes here.</div>
      </div>
      <div>
        <div>
          <div>dots</div>
          <p>Amount</p>
          <p>Number</p>
        </div>
        <div>
          <div>dots</div>
          <p>Amount</p>
          <p>Number</p>
        </div>
      </div>
    </article>
  );
}
