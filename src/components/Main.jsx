import BeingServed from "./BeingServed";
import InQueue from "./InQueue";
import TapStatus from "./TapStatus";
import ColleaguesSection from "./ColleagueSection";

export default function Main(props) {
  return (
    <main>
      <BeingServed></BeingServed>
      <InQueue></InQueue>
      <TapStatus></TapStatus>
      <ColleaguesSection></ColleaguesSection>
    </main>
  );
}
