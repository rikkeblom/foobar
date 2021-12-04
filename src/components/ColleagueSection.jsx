import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./colleague";

export default function ColleaguesSection(props) {
  return (
    <section className="colleagues">
      <h2>Colleagues</h2>
      <FilterAndSearchColleagues></FilterAndSearchColleagues>
      <section className="col">
        <Colleague></Colleague>
      </section>
    </section>
  );
}
