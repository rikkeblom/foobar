import BeersForQueuedOrders from "./BeersForQueuedOrders";

export default function QueueOrder() {
  return (
    <article>
      <div>
        <button>Open Order</button>
        <h3>Table #</h3>
        <span>Timer Goes Here</span>
      </div>
      <section>
        <BeersForQueuedOrders></BeersForQueuedOrders>
      </section>
    </article>
  );
}
