import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./colleague";

export default function ColleaguesSection(props) {
  const mapped = props.bartenders.map((bartender) => <Colleague {...bartender} key={bartender.name} />);

  // const [employees, setEmployees] = useState([]);
  // const [filter, setFilter] = useState("all"); //workingtoday, dayoff

  // let filteredEmployees = employees;
  // if (filter !== "all") {
  //   filteredEmployees = employees.filter((empl) => empl.statusDetail === filter);
  // }

  return (
    <section className="colleagues">
      <h2>Colleagues</h2>
      <section className="filter_section">
        <input type="search" />
        <div className="filter1">
          <label htmlFor="workingtoday">
            <input type="checkbox" id="workingtoday" name="workingtoday"></input>
            Working Today
          </label>
          <label htmlFor="dayoff">
            <input type="checkbox" id="dayoff" name="dayoff"></input>
            Day Off
          </label>
          <label htmlFor="az">
            <input type="checkbox" id="az" name="az"></input>
            A-Z
          </label>
        </div>
        <div className="filter2">
          <label htmlFor="waitingtables" className="lavender">
            <input type="checkbox" id="waitingtables" name="waitingtables"></input>
            Waiting
          </label>
          <label htmlFor="onbreak" className="olive">
            <input type="checkbox" id="onbreak" name="onbreak"></input>
            On Break
          </label>
          <label htmlFor="doinginventory" className="sky">
            <input type="checkbox" id="doinginventory" name="doinginventory"></input>
            Inventory
          </label>
          <label htmlFor="cleaning" className="mango">
            <input type="checkbox" id="cleaning" name="cleaning"></input>
            Cleaning
          </label>
          <label htmlFor="manager" className="white">
            <input type="checkbox" id="manager" name="manager"></input>
            Manager
          </label>
        </div>
      </section>
      <section className="col">{mapped}</section>
    </section>
  );
}
