import FilterAndSearchColleagues from "./FilterAndSearchColleagues";
import Colleague from "./colleague";

export default function ColleaguesSection(props) {
  return (
    <section>
      <h2>Colleagues</h2>
      <FilterAndSearchColleagues></FilterAndSearchColleagues>
      <section>
        <Colleague></Colleague>
      </section>
    </section>
  );
}
