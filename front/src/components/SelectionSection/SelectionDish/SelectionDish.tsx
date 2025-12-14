import "./SelectionDish.css";
import type { Dish } from "../../../App";

interface itemProps {
  data: Dish;
  setPickedDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

function Item(props: itemProps) {
  function textToNumber(value: string): number {
    return value.toUpperCase().charCodeAt(0);
  }
  function makePrice(text: string): string {
    return textToNumber(text[3]) + "." + textToNumber(text[1]) + "€";
  }
  function addToList() {
    props.setPickedDishes((el: Dish[]) => {
      return [...el, { ...props.data, idMeal: crypto.randomUUID() }];
    });
  }
  //crypto.randomUUID()
  return (
    <>
      <section id="rails">
        <div id="cart">
          <div id="selectedDishContainer">
            <div className="content">
              <div data-test="selectedDishtitle" id="selectedDishtitle">
                {props.data.strMeal}
              </div>
              <div id="selectedDishimg">
                <img src={props.data.strMealThumb} alt="" />
              </div>
              <div id="selectedDishIngridients">
                {[
                  props.data.strIngredient1,
                  props.data.strIngredient2,
                  props.data.strIngredient3,
                  props.data.strIngredient4,
                  props.data.strIngredient5,
                  props.data.strIngredient6,
                  props.data.strIngredient7,
                ]
                  .filter((el) => el != undefined && el != "" && el != null)
                  .join(", ")}
              </div>

              <button
                id="orderSelectedDish"
                onClick={() => {
                  addToList();
                }}
              >
                <span>Add</span>
                <span data-test="selectedDishPrice" id="selectedDishPrice">
                  {makePrice(props.data.strMeal)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Item;
