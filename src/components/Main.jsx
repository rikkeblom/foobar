import BeingServed from "./BeingServed";
import InQueue from "./InQueue";
import TapStatus from "./TapStatus";
import ColleaguesSection from "./ColleagueSection";

export default function Main(props) {
  return (
    <main>
      <BeingServed bartenders={props.data.bartenders} serving={props.data.serving} taps={props.data.taps}></BeingServed>
      <InQueue queue={props.data.queue} taps={props.data.taps}></InQueue>
      <TapStatus></TapStatus>
      <ColleaguesSection></ColleaguesSection>
    </main>
  );
}
