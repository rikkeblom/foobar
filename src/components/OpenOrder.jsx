import BeersForOpenOrders from "./BeersForOpenOrders";
//Run "for each" of all beer types in the order

export default function OpenOrder() {
  return (
    <article>
      <button className="table_button">
        <h3>Table #</h3>
        <span>Icon goes here</span>
      </button>
      <section>
        <p>Name of Server</p>
        <BeersForOpenOrders></BeersForOpenOrders>
      </section>
    </article>
  );
}
