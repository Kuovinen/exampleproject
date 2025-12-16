import React from "react";
import "./SelectionSection.css";
import Item from "./Item/Item";
import SelectionDish from "./SelectionDish/SelectionDish";
import type { Dish } from "../../App";

const fakeDish = {
  idMeal: "",
  strMeal: "",
  strMealThumb: "",
};

interface selectionProps {
  setPickedDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

function Selection(props: selectionProps) {
  const [dishes, setDishes] = React.useState<Dish[]>([]);
  const [selected, setSelected] = React.useState<Dish>(fakeDish);

  async function getMeals() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
      { method: "GET" }
    );
    const values = await data.json();
    setDishes(values.meals);
    setSelected(values.meals[0]);
  }

  React.useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <section id="controls">
        <div id="dishesicons">
          {dishes.map((item) => (
            <Item key={item.idMeal} data={item} setSelected={setSelected} />
          ))}
        </div>
        {dishes.length && (
          <SelectionDish
            key={selected.idMeal}
            data={selected}
            setPickedDishes={props.setPickedDishes}
          />
        )}
      </section>
    </>
  );
}

export default Selection;
