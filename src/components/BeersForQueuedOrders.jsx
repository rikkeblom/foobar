export default function BeersForQueuedOrders() {
  return (
    <article className="beer_queue_article">
      <div className="queue_beer">
        <img src="#" alt="Beer" />
        <div>
          <h4>Beer Name</h4>
          <p>x#</p>
        </div>
      </div>
      <div className="queue_tap">
        <img src="src/img/icons/red_tap.png" alt="Tap" />
        <p>#</p>
      </div>
    </article>
  );
}
