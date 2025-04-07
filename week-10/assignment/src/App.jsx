import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Home from "./views/Home";
import DeckDetail from "./views/DeckDetail";
import Data from "./Data.json";

function App() {
  const [cards, setCards] = useState(Data);

  return (
    <Routes>
      <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
      <Route path=":param" element={<DeckDetail data={cards} />} />
    </Routes>
  );
}

export default App;
