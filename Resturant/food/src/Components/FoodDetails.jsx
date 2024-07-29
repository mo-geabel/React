import { useEffect, useState } from "react";
import styles from "./FoodDeatils.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API = "c2986a3bb6274ba3b45598a973d3764c";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeName}>
        <h1>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>{food.readyInMinutes} Minutes⏱️</strong>
        </span>
        <span>
          <strong>serves {food.servings} 👪</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? " 🥕Vegetarian" : "Non-Vegetarian 🍖"}
          </strong>
        </span>
        <span>
          <strong>{food.vegan ? "Vegan 🐮" : ""}</strong>
        </span>
      </div>
      <div>
        <span>
          <strong>{food.pricePerServing / 100} </strong>💲
        </span>
      </div>
      <h2>Ingredients</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div key={item.id}>
            <img
              src={
                `https://api.spoonacular.com/recipes/${food.id}/ingredientWidget` +
                item.image
              }
              alt=""
            />
            <h3>{item.name}</h3>
          </div>
        ))
      )}
      <div>
        <h2>Instructions</h2>
      </div>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
