//What is the AZ filter?
//or do we suddenly have a sort hiding among the filters?

export default function FilterAndSearchColleagues() {
  return (
    <section className="filter_section">
      <input type="search" />
      <div className="filter1">
        <label for="workingtoday">
          <input type="checkbox" id="workingtoday" name="workingtoday"></input>
          Working Today
        </label>
        <label for="dayoff">
          <input type="checkbox" id="dayoff" name="dayoff"></input>
          Day Off
        </label>
        <label for="az">
          <input type="checkbox" id="az" name="az"></input>
          A-Z
        </label>
      </div>
      <div className="filter2">
        <label for="waitingtables" className="lavender">
          <input type="checkbox" id="waitingtables" name="waitingtables"></input>
          Waiting
        </label>
        <label for="onbreak" className="olive">
          <input type="checkbox" id="onbreak" name="onbreak"></input>
          On Break
        </label>
        <label for="doinginventory" className="sky">
          <input type="checkbox" id="doinginventory" name="doinginventory"></input>
          Inventory
        </label>
        <label for="cleaning" className="mango">
          <input type="checkbox" id="cleaning" name="cleaning"></input>
          Cleaning
        </label>
        <label for="manager" className="white">
          <input type="checkbox" id="manager" name="manager"></input>
          Manager
        </label>
      </div>
    </section>
  );
}
