import "./App.css";
import Table from "./components/table";
import SelectMenu from "./components/selectMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductType } from "./interfaces";

const categories = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "HARLANDA",
  },
  {
    id: 3,
    name: "MORABO",
  },
  {
    id: 4,
    name: "FINNALA",
  },
  {
    id: 5,
    name: "UPPLAND",
  },
];

function App() {
  const [selected, setSelected] = useState(categories[0]);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://shopify-challenge-backend-ilya.herokuapp.com/products/${selected.name}`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [selected]);

  return (
    <div className="App">
      <SelectMenu
        selected={selected}
        setSelected={setSelected}
        categories={categories}
      />
      <Table products={products} />
    </div>
  );
}

export default App;
