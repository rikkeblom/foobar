//What is the AZ filter?
//or do we suddenly have a sort hiding among the filters?

export default function FilterAndSearchColleagues() {
  return (
    <section className="filter_section">
      <input type="search" />
      <div className="filter1">
        <label htmlFor="workingtoday">
          <input type="checkbox" id="workingtoday" name="workingtoday"></input>
          Working Today
        </label>
        <label htmlFor="dayoff">
          <input type="checkbox" id="dayoff" name="dayoff"></input>
          Day Off
        </label>
        <label htmlFor="az">
          <input type="checkbox" id="az" name="az"></input>
          A-Z
        </label>
      </div>
      <div className="filter2">
        <label htmlFor="pourBeer" className="lavender">
          <input type="checkbox" id="pourBeer" name="pourBeer"></input>
          Pouring Beer
        </label>
        <label htmlFor="recievePayment" className="olive">
          <input type="checkbox" id="recievePayment" name="recievePayment"></input>
          Receiving Payment
        </label>
        <label htmlFor="replaceKeg" className="sky">
          <input type="checkbox" id="replaceKeg" name="replaceKeg"></input>
          Replacing Keg
        </label>
        <label htmlFor="releaseTap" className="mango">
          <input type="checkbox" id="releaseTap" name="releaseTap"></input>
          Releasing Tap
        </label>
        <label htmlFor="waiting" className="white">
          <input type="checkbox" id="waiting" name="waiting"></input>
          Waiting
        </label>
        <label htmlFor="startServing" className="pink">
          <input type="checkbox" id="startServing" name="startServing"></input>
          Started Serving
        </label>
        <label htmlFor="reserveTap" className="pool">
          <input type="checkbox" id="reserveTap" name="reserveTap"></input>
          Reserving Tap
        </label>
        
      </div>
    </section>
  );
}
