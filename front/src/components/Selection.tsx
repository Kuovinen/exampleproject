import React from "react";
import "./Selection.css";
import Item from "./Item";
import SelectionDish from "./SelectionDish";

interface Dish {
  idMeal: string;
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

function Selection() {
  const [dishes, setDishes] = React.useState<Dish[]>([]);
  const [selected, setSelected] = React.useState<Dish>({});
  React.useEffect(() => {
    async function getMeals() {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      const values = await data.json();
      setDishes(values.meals);
      setSelected(values.meals[0]);
    }
    getMeals();
  }, []);

  return (
    <>
      <section id="controls">
        <div id="dishesicons">
          {dishes.map((item) => (
            <Item
              key={item.idMeal}
              title={item.strMeal}
              cover={item.strMealThumb}
            />
          ))}
        </div>
        {dishes.length && (
          <SelectionDish key={selected.idMeal} data={selected} />
        )}
      </section>
    </>
  );
}

export default Selection;
