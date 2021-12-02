import BeersForQueuedOrders from "./BeersForQueuedOrders";

export default function QueueOrder() {
  return (
    <article className="queue_article">
      <div className="queue_table">
        <button>Open Order</button>
        <h3>Table #</h3>
        <span>Timer</span>
      </div>
      <section>
        <BeersForQueuedOrders></BeersForQueuedOrders>
      </section>
    </article>
  );
}
