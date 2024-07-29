import Fooditem from "./Fooditem";

export default function Foodlist({ food, setFoodId }) {
  return (
    <div>
      {food.map((food) => (
        <Fooditem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
