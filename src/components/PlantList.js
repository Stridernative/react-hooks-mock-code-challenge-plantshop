import React from "react";
import PlantCard from "./PlantCard";



function PlantList({ plants }) {
  return (
    // <>{console.log({plants})}</>
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant}/>)}</ul>
    
    );
  
}



export default PlantList;
