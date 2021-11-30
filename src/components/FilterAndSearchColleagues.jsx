//What is the AZ filter?
//or do we suddenly have a sort hiding among the filters?

export default function FilterAndSearchColleagues() {
  return (
    <section>
      <input type="search" />
      <div>
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
      <div>
        <label for="waitingtables">
          <input type="checkbox" id="waitingtables" name="waitingtables"></input>
          Waiting Tables
        </label>
        <label for="onbreak">
          <input type="checkbox" id="onbreak" name="onbreak"></input>
          On Break
        </label>
        <label for="doinginventory">
          <input type="checkbox" id="doinginventory" name="doinginventory"></input>
          Doing Inventory
        </label>
        <label for="cleaning">
          <input type="checkbox" id="cleaning" name="cleaning"></input>
          Cleaning
        </label>
        <label for="manager">
          <input type="checkbox" id="manager" name="manager"></input>
          Manager
        </label>
      </div>
    </section>
  );
}
