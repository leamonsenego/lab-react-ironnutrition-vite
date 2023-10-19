import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function handleDeleteFood(indexToDelete) {
    const updatedFoods = foods.filter((food, index) => index !== indexToDelete);
    setFoods(updatedFoods);

    return updatedFoods;
  }

  return (
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm updateState={setFoods} />
      <h1>Food list</h1>
      {foods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            food={food}
            onClick={() => handleDeleteFood(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
