//Make tap number only show if it's a beer in use

export default function Tap() {
  return (
    <article className="tap_article">
      <h3>Tap #</h3>
      <div className="tap_visuals">
        <figure>
          <img src="#" alt="Beer" />
          <figcaption>Beer Name</figcaption>
        </figure>
        <div className="tap_bar"></div>
      </div>
      <div>
        <div className="line_it_up">
          <p>Tap</p>
          <p className="tap_amount">#L</p>
        </div>
        <div className="line_it_up">
          <p>Kegs</p>
          <p className="keg_amount">#</p>
        </div>
      </div>
    </article>
  );
}
