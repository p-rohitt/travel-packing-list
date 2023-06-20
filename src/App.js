import Header from "./Header.js";
import "./App.css";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import { useState } from "react";
import Stats from './Stats.js';
function App() {
  const [items, setItems] = useState([]);


  function onToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function onDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id));
  }

  function onClearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />

      <Form items={items} setItems={setItems} />

      <PackingList items={items} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} onClearList={ onClearList} />

      <Stats items= {items} />
    </div>
  );
}

export default App;
