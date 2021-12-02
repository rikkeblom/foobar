import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./style.scss";

function App() {
  //useState to have data that will update the connected elements when it changes
  //I also use an interval to make it fetch and refresh the data every 2 seconds
  //I got help for the interval here: https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  const [fetchedData, fetchNewData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second second!");
      fetchData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    const res = await fetch("https://foobar-databar.herokuapp.com/");
    const data = await res.json();
    fetchNewData(data);
  }

  //Here is where the "HTML" begins
  return (
    <div className="App">
      <Header></Header>
      <Main data={fetchedData}></Main>
      <Aside></Aside>
    </div>
  );
}

export default App;
