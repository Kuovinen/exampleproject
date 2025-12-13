import "./App.css";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectionSection from "./components/SelectionSection";
import CoverImg from "./components/CoverImg";
import SelectedItems from "./components/SelectedItems";

export interface Dish {
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

function App() {
  const [pickedDishes, setPickedDishes] = React.useState<Dish[]>([]);

  return (
    <>
      <header>
        <Header />
      </header>
      <CoverImg />
      <main>
        <SelectionSection setPickedDishes={setPickedDishes} />
        <SelectedItems
          pickedDishes={pickedDishes}
          setPickedDishes={setPickedDishes}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
