import SectionHeader from "./SectionHeader";
import OpenOrdersContainer from "./OpenOrdersContainer";

//props gets bartenders, beers, serving and taps

export default function BeingServed(props) {
  return (
    <section>
      <SectionHeader servingLength={props.serving.length} sectionTitle="Being Served"></SectionHeader>
      <OpenOrdersContainer beers={props.beers} bartenders={props.bartenders} serving={props.serving} taps={props.taps}></OpenOrdersContainer>
    </section>
  );
}
