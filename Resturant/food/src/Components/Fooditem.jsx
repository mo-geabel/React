import Styles from "./Item.module.css";
export default function Fooditem({ food, setFoodId }) {
  return (
    <div className={Styles.container}>
      <img className={Styles.ItemImage} src={food.image} alt="" />
      <div className={Styles.ItemContainer}>
        <p className={Styles.Itemname} key={food.id}>
          {food.title}
        </p>
      </div>
      <div className={Styles.ButtonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={Styles.ItemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
