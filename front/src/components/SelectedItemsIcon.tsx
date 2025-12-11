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
      <div className="dishicon" onClick={() => removeThisItem()}>
        <p>
          <p className="iconName">{props.data.strMeal}</p>
          <p className="poista">REMOVE ?</p>
        </p>
        <img src={props.data.strMealThumb} alt="" />
      </div>
    </>
  );
}

export default SelectedItemsIcon;
