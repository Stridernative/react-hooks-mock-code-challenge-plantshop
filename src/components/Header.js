import React from "react";
import PlantForm from "./NewPlantForm"


function Header({ newPlant }) {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <PlantForm newPlant={newPlant}/>
    </header>
  );
}

export default Header;
