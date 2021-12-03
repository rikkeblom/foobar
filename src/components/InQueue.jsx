import SectionHeader from "./SectionHeader";
import QueueContainer from "./QueueContainer";

//we are receiving queue, beer and tap info in the props

export default function InQueue(props) {
  return (
    <section>
      <SectionHeader></SectionHeader>
      <QueueContainer></QueueContainer>
    </section>
  );
}
