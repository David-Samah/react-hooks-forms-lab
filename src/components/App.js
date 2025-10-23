import React, { useState } from "react";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";

const initialItems = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Swiss Cheese", category: "Dairy" },
  { id: 6, name: "Cookies", category: "Dessert" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  // Filter items by name case-insensitive includes searchText
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <Filter search={searchText} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;

