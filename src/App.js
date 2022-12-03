import "./App.css";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function App() {
  const [animationParent] = useAutoAnimate({
    duration: 100
  });
  const [items, setItems] = useState(["comprar leite"]);

  const onRemoveItem = (itemToBeRemoved) => {
    setItems((prev) => prev.filter((i) => i !== itemToBeRemoved));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setItems((prev) => [...prev, ev.target.newItem.value]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder="Digite algo e dê enter" />
      </form>
      <ul ref={animationParent}>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => onRemoveItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
