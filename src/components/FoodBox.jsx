
import React from "react";

const FoodBox = (props)  => {
  return (
    <div>
      <p>{props.food.name} </p>

      <img src={props.food.image} style={{ width: "200px" }} />

      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>

      <p>
        <b>Total Calories: {props.food.calories * props.food.servings}</b> kcal
      </p>

      <button onClick={props.onClick}>Delete</button>
    </div>
  );
}

export default FoodBox
