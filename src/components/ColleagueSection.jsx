import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./Colleague";
import { useState } from "react";



export default function ColleaguesSection(props) {
  const statusDetail = props.statusDetail;

  //let filteredList = props.bartenders;
  const [filteredList, setFilteredList] = useState(props.bartenders);

  //import the new bartender array here
  //const exstraColleagues = ['Stefan Rhóhelio', 'Simone Lovegood', 'Harald Cumberback', 'Nadia Steel']; 
  
  //concat the bartender array from props with our fake bartender array

  //const allColleagues = props.bartenders.concat(exstraColleagues);

  //use new concat array for mapping
  //const mapped = props.bartenders.map((bartender) => <Colleague {...bartender} key={bartender.name} />);
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
   let newFilteredList = props.bartenders;

    if (filterBy === "pourBeer") {
      newFilteredList = newFilteredList.filter(isPourBeer);
    } else if (filterBy === "recievePayment") {
      newFilteredList = newFilteredList.filter(isrecievePayment);
    } else if (filterBy === "replaceKeg") {
      newFilteredList = newFilteredList.filter(isreplaceKeg);
    } else if (filterBy === "releaseTap") {
      newFilteredList = newFilteredList.filter(isreleaseTap);
    } else if (filterBy === "waiting") {
      newFilteredList = newFilteredList.filter(iswaiting);
    } else if (filterBy === "startServing") {
      newFilteredList = newFilteredList.filter(isstartServing);
    } else if (filterBy === "reserveTap") {
      newFilteredList = newFilteredList.filter(isreserveTap);
    } else if (filterBy === "workingtoday") {
      newFilteredList = newFilteredList.filter(isworkingtoday);
    } else if (filterBy === "*") {
      newFilteredList = newFilteredList.filter(all);
    }
    else if (filterBy === "dayoff") {
      newFilteredList = newFilteredList.filter(isdayoff);
    }

    setFilteredList(newFilteredList);
    
  }

  function isPourBeer(bartender){
    return bartender.statusDetail === "pourBeer";

  }
  function isrecievePayment(bartender){
    return bartender.statusDetail === "recievePayment";
  }
  function isreplaceKeg(bartender){
    return bartender.statusDetail === "replaceKeg";
  }
  function isreleaseTap(bartender){
    return bartender.statusDetail === "releaseTap";
  }
  function iswaiting(bartender){
    return bartender.statusDetail === "waiting";
  }
  function isstartServing(bartender){
    return bartender.statusDetail === "startServing";
  }
  function isreserveTap(bartender){
    return bartender.statusDetail === "reserveTap";
  }

  function isworkingtoday(bartender){
    return bartender.statusDetail === "pourBeer", "recievePayment", "replaceKeg", "releaseTap", "waiting", "startServing", "reserveTap";
  }

  function all(){
    return props.bartenders;
  }
  
  function isdayoff(bartender){
    return bartender.statusDetail === " ";
  }

  function searchImput(evt) {
    // filteredList(
    //   props.bartenders.filter((props) => {
    //     return (
    //       props.name
    //     );
    //   })
    // );
  }

  const mapped = filteredList.map((bartender) => <Colleague {...bartender} key={bartender.name} />);

  return (
    <section id="colleagueSection" className="colleagues">
      <h2>Colleagues</h2>
      <section className="filter_section">
        <input type="search" onClick={searchImput}/>
        <div className="filter1">
          <label htmlFor="workingtoday">
            <input type="checkbox" id="workingtoday" name="workingtoday" onClick={selectFilter} data-action="filter" data-field="workingtoday"></input>
            Working Today
          </label>
          <label htmlFor="dayoff">
            <input type="checkbox" id="dayoff" name="dayoff" onClick={selectFilter} data-action="filter" data-field="dayoff"></input>
            Day Off
          </label>
          {/* <label htmlFor="az">
            <input type="checkbox" id="az" name="az"></input>
            A-Z
          </label> */}
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
