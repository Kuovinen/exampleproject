import "./SelectionDish.css";

interface dish {
  strMeal: string;
  strMealThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
}
interface itemProps {
  data: dish;
}
function Item(props: itemProps) {
  function textToNumber(value: string): number {
    return value.toUpperCase().charCodeAt(0);
  }
  function makePrice(text: string): string {
    return textToNumber(text[3]) + "." + textToNumber(text[1]) + "€";
  }

  return (
    <>
      <section id="selectedDish">
        <div id="selectedDishtitle">{props.data.strMeal}</div>
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

        <button id="orderSelectedDish">
          <span>Order</span>
          <span id="selectedDishPrice">{makePrice(props.data.strMeal)}</span>
        </button>
      </section>
    </>
  );
}

export default Item;
