import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./style.scss";
import ClockLoader from "react-spinners/ClockLoader";
//https://www.npmjs.com/package/react-spinners

//Here I fetch data about the beer *ONCE*
let beerData;
async function fetchDataBeers() {
  const resBeer = await fetch("https://foobar-databar.herokuapp.com/beertypes");
  const dataBeer = await resBeer.json();
  beerData = dataBeer;
}
fetchDataBeers();

function App() {
  //useState to have data that will update the connected elements when it changes
  //I also use an interval to make it fetch and refresh the data every 2 seconds
  //I got help for the interval here: https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  const [fetchedData, fetchNewData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("This will run every second second!");
      fetchDataBar();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  async function fetchDataBar() {
    const res = await fetch("https://foobar-databar.herokuapp.com/");
    const data = await res.json();
    fetchNewData(data);
  }

  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0e5c6",
  };

  if (!fetchedData.bar) {
    //put maybe spinner loading thing here
    return (
      <div style={override}>
        <ClockLoader loading={loading} size={150} />
      </div>
    );
  } else {
    //Here is where the "HTML" begins
    return (
      <div className="App">
        <Header closingTime={fetchedData.bar.closingTime}></Header>
        <Main beers={beerData} data={fetchedData}></Main>
        <Aside></Aside>
      </div>
    );
  }
}

export default App;
