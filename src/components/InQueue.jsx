import SectionHeader from "./SectionHeader";
import QueueContainer from "./QueueContainer";

//we are receiving queue, beer and tap info in the props

export default function InQueue(props) {
  return (
    <section id="inQueue" className="queue">
      <SectionHeader servingLength={props.queue.length} sectionTitle="In Queue"></SectionHeader>
      <QueueContainer {...props}></QueueContainer>
    </section>
  );
}
