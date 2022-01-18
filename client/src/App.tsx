import "./App.css";
import Table from "./components/table";
import SelectMenu from "./components/selectMenu";
import { useState, useEffect } from "react";
import axios from "axios";

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
];

function App() {
  const [selected, setSelected] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${selected.name}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
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
