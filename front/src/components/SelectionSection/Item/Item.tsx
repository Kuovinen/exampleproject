import "./Item.css";
import type { Dish } from "../App";

interface itemProps {
  data: Dish;
  setSelected: React.Dispatch<React.SetStateAction<Dish>>;
}

function Item(props: itemProps) {
  const { strMeal, strMealThumb } = props.data;
  function textToNumber(value: string): number {
    return value.toUpperCase().charCodeAt(0);
  }
  function makePrice(text: string): string {
    return textToNumber(text[3]) + "." + textToNumber(text[1]) + "€";
  }

  return (
    <>
      <button
        className="item"
        onClick={() => {
          props.setSelected(props.data);
        }}
      >
        <div className="itemtitle">{strMeal}</div>
        <div className="itemimg">
          <img src={strMealThumb} alt="" />
        </div>
        <div className="itemprice">{makePrice(strMeal)}</div>
      </button>
    </>
  );
}

export default Item;
