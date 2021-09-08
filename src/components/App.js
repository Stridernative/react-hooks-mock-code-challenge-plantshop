import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";


function App() {
  const [plants, setPlants] = useState([])

  const handlePlant = (plants) => setPlants(plants);

  
useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantData => setPlants(plantData))
  } , [])

  return (
    <div className="app">
      {/* {console.log(plants)} */}
      <Header />
      {/* <PlantPage /> */}
      <PlantList plants={plants}/>
    </div>
  );
  
}


export default App;
