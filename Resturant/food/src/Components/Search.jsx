import { useEffect, useState } from "react";
import Foodlist from "./FoodList";
import styles from "./Search.module.css";
export default function Search({ setQuery, setFood, query }) {
  const URl = "https://api.spoonacular.com/recipes/complexSearch";
  const API = "put API";

  useEffect(() => {
    async function Food() {
      const res = await fetch(`${URl}?query=${query}&apiKey=${API}`);
      const Data = await res.json();
      console.log(Data);
      setFood(Data.results);
    }
    Food();
  }, [query]);
  return (
    <div>
      <span>
        <input
          className={styles.bar}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </span>
    </div>
  );
}
