import BeersForOpenOrders from "./BeersForOpenOrders";
//Run "for each" of all beer types in the order

export default function OpenOrder() {
  return (
    <article className="served_article">
      <button className="table_button">
        <h3>Table #</h3>
        <span>V</span>
      </button>
      <section>
        <p className="server_name">Name of Server</p>
        <BeersForOpenOrders></BeersForOpenOrders>
      </section>
    </article>
  );
}
