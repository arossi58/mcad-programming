import { useState } from 'react'
import './App.css'
import llamaImg from "./assets/Llama_grande.webp"
import alpacaImg from "./assets/alpaca.jpg"

function App() {
  const [animal, setAnimal] = useState(llamaImg)

  function llamaPress() {
    setAnimal(llamaImg)
  }

    function alpacaPress() {
      setAnimal(alpacaImg)
    }
  return (
    <>
      <div className="animal">
        <img src={animal} alt={`a nice image of a ${animal}`} />
        <button onClick={alpacaPress}>Alpaca</button>
        <button onClick={llamaPress}>Llama</button>
      </div>
    </>
  )
}

export default App
