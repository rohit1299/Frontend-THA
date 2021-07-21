import "./styles.css";
import Card from "./components/Card";
import { useState } from "react";

const menuItems = [
  ["Pizza", 526],
  ["Burger", 169],
  ["Coke", 500],
  ["Brownie", 180],
  ["Fried Rice", 90],
  ["Lassania", 200],
  ["Pani Puri", 10]
];
export default function App() {
  const [menu, setMenu] = useState(menuItems);
  return (
    <div className="App">
      <Card menu={menu} setCards={setMenu} />
    </div>
  );
}
