export default function SectionHeader(props) {
  return (
    <div className="section_header">
      <span>{props.servingLength}</span>
      <h2>{props.sectionTitle}</h2>
    </div>
  );
}
