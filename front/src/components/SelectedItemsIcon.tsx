import "./SelectedItemsIcon.css";
import type { Dish } from "../App";

interface SelectedItemsIconProps {
  data: Dish;
  setPickedDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

function SelectedItemsIcon(props: SelectedItemsIconProps) {
  function removeThisItem() {
    props.setPickedDishes((original) => {
      return original.filter((el) => el.idMeal != props.data.idMeal);
    });
  }
  return (
    <>
      <div
        data-test="dishicon"
        className="dishicon"
        onClick={() => removeThisItem()}
      >
        <p>
          <div className="iconName">{props.data.strMeal}</div>
          <div className="poista">REMOVE ?</div>
        </p>
        <img src={props.data.strMealThumb} alt="" />
      </div>
    </>
  );
}

export default SelectedItemsIcon;
