import React, { useState } from "react";
import "./PackingList.css";
import Item from "./Item";
function PackingList({ items, onToggleItem, onDeleteItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
     let sortedItems;

     if (sortBy === "input") sortedItems = items;

     if (sortBy === "description")
       sortedItems = items  
         .slice()
         .sort((a, b) => a.itemName.localeCompare(b.itemName));

     if (sortBy === "packed")
       sortedItems = items
         .slice()
         .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="packinglist">
      <ul className="items">
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
export default PackingList;
