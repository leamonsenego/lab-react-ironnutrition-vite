import React, { useState } from "react";

const AddFoodForm = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  function handleSubmit(event) {
    event.preventDefault();


    props.updateState((prevItems) => [
      { name, image, calories, servings },
      ...prevItems,
    ]);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Image"
      />

      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        placeholder="Calories"
      />

      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={servings}
        onChange={(event) => setServings(event.target.value)}
        placeholder="Servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm
// Your code here
