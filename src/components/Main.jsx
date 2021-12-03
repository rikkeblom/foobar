import BeingServed from "./BeingServed";
import InQueue from "./InQueue";
import TapStatus from "./TapStatus";
import ColleaguesSection from "./ColleagueSection";

export default function Main(props) {
  return (
    <main>
      <BeingServed beers={props.beers} bartenders={props.data.bartenders} serving={props.data.serving} taps={props.data.taps}></BeingServed>
      <InQueue beers={props.beers} queue={props.data.queue} taps={props.data.taps}></InQueue>
      <TapStatus beers={props.beers} taps={props.data.taps}></TapStatus>
      <ColleaguesSection bartenders={props.data.bartenders}></ColleaguesSection>
    </main>
  );
}
