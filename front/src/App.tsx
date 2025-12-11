import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
import CoverImg from "./components/CoverImg";
import SelectedItems from "./components/SelectedItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <CoverImg />

      <main>
        <Selection />
        <SelectedItems />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
