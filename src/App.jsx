import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./style.scss";

//Here I fetch data about the beer *ONCE*
let beerData;
async function fetchDataBeers() {
  const resBeer = await fetch("https://foobar-databar.herokuapp.com/beertypes");
  const dataBeer = await resBeer.json();
  beerData = dataBeer;
  // console.log(beerData);
}
fetchDataBeers();

function App() {
  //useState to have data that will update the connected elements when it changes
  //I also use an interval to make it fetch and refresh the data every 2 seconds
  //I got help for the interval here: https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  const [fetchedData, fetchNewData] = useState([]);
  const [shiftArray, setShiftArray] = useState([]);

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
    checkShiftArray(data);
  }

  //testing------------------
  //I want to map through the orders and add a table number to an array that I can send along
  //I want to add a shift time to each employee add it to an array and send it along

  async function checkShiftArray(data) {
    //check that we have data
    if (data.bartenders) {
      //map through the bartenders from the database
      let newArray = [];
      await data.bartenders.map((bartender) => {
        if (shiftArray.length > 0) {
          shiftArray.map((existingShift) => {
            console.log(existingShift);
            if (bartender.name === existingShift.name) {
              console.log(bartender.name + "is already listed");
            } else {
              console.log("Hello World");
              const randomTimeStart = 15 + Math.round(Math.random() * 5);
              const randomTimeEnd = 20 + Math.round(Math.random() * 4);
              const shift = { name: bartender.name, shift: `${randomTimeStart} - ${randomTimeEnd}` };
              newArray = newArray.concat(shift);
            }
          });
        } else {
          console.log("let's go!!");
          console.log(shiftArray);
          const randomTimeStart = 15 + Math.round(Math.random() * 5);
          const randomTimeEnd = 20 + Math.round(Math.random() * 4);
          const shift = { name: bartender.name, shift: `${randomTimeStart} - ${randomTimeEnd}` };
          newArray = newArray.concat(shift);
        }
      });
      newArray = shiftArray.concat(newArray);
      console.log(newArray);
      setShiftArray(newArray);
    }
  }

  //--------------------------

  if (!fetchedData.bar) {
    //put maybe spinner loading thing here
    return null;
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
