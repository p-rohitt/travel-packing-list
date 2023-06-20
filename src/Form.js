import React, { useState } from "react";
import "./Form.css";
function Form({items,setItems}) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  

  function addItem(e) {
    e.preventDefault();
    const newItem = { itemName, quantity, packed: false, id: Date.now() };

    setItems((items) => [...items, newItem]);

    setItemName("");
    setQuantity(1);
  }
  return (
    <div className="form">
      <div className="form__message">
        <h4>What do you need for your trip?😍</h4>
      </div>

      <form className="form__input" onSubmit={addItem}>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>

        <input
          type="text"
          placeholder="Item..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
export default Form;
