import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./Colleague";



export default function ColleaguesSection(props) {
  const statusDetail = props.statusDetail;
  //import the new bartender array here
  //const exstraColleagues = ['Stefan Rhóhelio', 'Simone Lovegood', 'Harald Cumberback', 'Nadia Steel']; 
  
  //concat the bartender array from props with our fake bartender array

  //const allColleagues = props.bartenders.concat(exstraColleagues);

  //use new concat array for mapping
  const mapped = props.bartenders.map((bartender) => <Colleague {...bartender} key={bartender.name} />);
  //const mapped = allColleagues.map((bartender) => <Colleague {...bartender} key={bartender.name} />);

  // const [employees, setEmployees] = useState([]);
  // const [filter, setFilter] = useState("all"); //workingtoday, dayoff

  // let filteredEmployees = employees;
  // if (filter !== "all") {
  //   filteredEmployees = employees.filter((empl) => empl.statusDetail === filter);
  // }
  function selectFilter(event) {
    const filter = event.target.dataset.field;
    filterList(filter);
  }

  function filterList(filterBy) {
    let filteredList = props.bartenders;
    //console.log(filteredList);

    if (filterBy === "pourBeer") {
      filteredList = filteredList.filter(isPourBeer);
    }
    
  }

  function isPourBeer(bartender){
    console.log(bartender.statusDetail);
    return bartender.statusDetail === "pourBeer";
  }

  return (
    <section className="colleagues">
      <h2>Colleagues</h2>
      <section className="filter_section">
        <input type="search" />
        <div className="filter1">
          <label htmlFor="workingtoday">
            <input type="checkbox" id="workingtoday" name="workingtoday" onClick={selectFilter} data-action="filter" data-field="workingtoday"></input>
            Working Today
          </label>
          <label htmlFor="dayoff">
            <input type="checkbox" id="dayoff" name="dayoff" onClick={selectFilter} data-action="filter" data-field="dayoff"></input>
            Day Off
          </label>
          <label htmlFor="az">
            <input type="checkbox" id="az" name="az"></input>
            A-Z
          </label>
        </div>
        <div className="filter2">
        <label htmlFor="all" className="no_color">
          <input type="checkbox" id="all" name="all" onClick={selectFilter} data-action="filter" data-field="*"></input>
          All
        </label>
        <label htmlFor="pourBeer" className="lavender">
          <input type="checkbox" id="pourBeer" name="pourBeer" onClick={selectFilter} data-action="filter" data-field="pourBeer"></input>
          Pouring Beer
        </label>
        <label htmlFor="recievePayment" className="olive">
          <input type="checkbox" id="recievePayment" name="recievePayment" onClick={selectFilter} data-action="filter" data-field="recievePayment"></input>
          Receiving Payment
        </label>
        <label htmlFor="replaceKeg" className="sky">
          <input type="checkbox" id="replaceKeg" name="replaceKeg" onClick={selectFilter} data-action="filter" data-field="replaceKeg"></input>
          Replacing Keg
        </label>
        <label htmlFor="releaseTap" className="mango">
          <input type="checkbox" id="releaseTap" name="releaseTap" onClick={selectFilter} data-action="filter" data-field="releaseTap"></input>
          Releasing Tap
        </label>
        <label htmlFor="waiting" className="white">
          <input type="checkbox" id="waiting" name="waiting" onClick={selectFilter} data-action="filter" data-field="waiting"></input>
          Waiting
        </label>
        <label htmlFor="startServing" className="pink">
          <input type="checkbox" id="startServing" name="startServing" onClick={selectFilter} data-action="filter" data-field="startServing"></input>
          Started Serving
        </label>
        <label htmlFor="reserveTap" className="pool">
          <input type="checkbox" id="reserveTap" name="reserveTap" onClick={selectFilter} data-action="filter" data-field="reserveTap"></input>
          Reserving Tap
        </label>
        </div>
      </section>
      <section className="col">{mapped}</section>
    </section>
  );
}
