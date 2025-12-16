import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import SelectionSection from "./components/SelectionSection/SelectionSection";
import CoverImg from "./components/CoverImg";
import SelectedItems from "./components/SelectedItems/SelectedItems";

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
  const [pickedDishes, setPickedDishes] = React.useState<Dish[]>([]); //order
  const [serverData, setServerData] = React.useState([
    { _id: "", payload: [] },
  ]); //needed here for getData() below

  async function getData() {
    const res = await fetch("http://localhost:3000/data", { method: "GET" });
    const data = await res.json();
    console.log(data);
    setServerData(() => data);
  }
  //initial data request from mongodb for food orders made before
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <Header serverData={serverData} getData={getData} />
      </header>
      <CoverImg />
      <main>
        <SelectionSection setPickedDishes={setPickedDishes} />
        <SelectedItems
          pickedDishes={pickedDishes}
          setPickedDishes={setPickedDishes}
          getData={getData}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
