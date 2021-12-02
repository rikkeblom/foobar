import Tap from "./Tap";

export default function TapStatus() {
  return (
    <section className="tap">
      <h2>Tap Status</h2>
      <section className="on_tap"> 
        <Tap></Tap>
      </section>
      <section className="off_tap">
        <Tap></Tap>
      </section>
    </section>
  );
}
