import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./colleague";

export default function ColleaguesSection(props) {
  const mapped = props.bartenders.map((bartender) => <Colleague {...bartender} key={bartender.name} />);

  return (
    <section className="colleagues">
      <h2>Colleagues</h2>
      <FilterAndSearchColleagues></FilterAndSearchColleagues>
      <section className="col">{mapped}</section>
    </section>
  );
}
