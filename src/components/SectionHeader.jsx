export default function SectionHeader(props) {
  return (
    <div>
      <span>{props.servingLength}</span>
      <h2>{props.sectionTitle}</h2>
    </div>
  );
}
