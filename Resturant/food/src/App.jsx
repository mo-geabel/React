import React, { useState } from "react";
import Head from "./Components/Head";
import Search from "./Components/Search";
import Styles from "./App.module.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
import FoodList from "./Components/FoodList";

function App() {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);
  const [foodId, setFoodId] = useState("715415");
  return (
    <div className={Styles.body}>
      <Head />
      <Search query={query} setQuery={setQuery} setFood={setFood} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} food={food} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails key={food.id} foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
