import React from "react";

function NewPlantForm({ newPlant }) {

  const createPlant = (e) => {
    e.preventDefault()
    newPlant.name = (e.target.name.value)
    newPlant.image = (e.target.image.value)
    newPlant.price = (e.target.price.value)
  }



  const handleLikeClick = () => { 	
    // renderUpdatedToy(plants)
  fetch(`http://localhost:3000/toys${newPlant.id}`, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
      "Accept": "application/json"
},
body: JSON.stringify({
  likes: toy.likes + 1
  })
})
.then(res => res.json())
  .then(updatedToy => renderUpdatedTOy(updatedToy))




  return (
     <div className="new-plant-form">
       <h2>New Plant</h2>
       <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit" onSubmit={createPlant}>Add Plant</button>
       </form>
     </div> 
  );
}

export default NewPlantForm;
