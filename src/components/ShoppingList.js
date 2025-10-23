import React, { useState } from "react";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map(item => (
          <li key={item.id} className="Item">
            <span className="Item-name">{item.name}</span> -{" "}
            <span className="Item-category">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
