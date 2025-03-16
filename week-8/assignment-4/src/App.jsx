
import './App.css'
import Cameras from './Cameras'
import Data from './Data'
import { maxPrice } from './Cameras'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [cards, setCards] = useState(Data)
  
  function deleteCard(id) {
    const updatedArray = cards.filter((cameraCards) => {
      return cameraCards.id !== id;
    })
    setCards(updatedArray)
  }

  function duplicateCard(id) {
    console.log("copy")
    const matchingCard = cards.find((cameraCards) => {
      return cameraCards.id === id;
    })
    const updatedCards = {...matchingCard, id: nanoid()}
    setCards([...cards, updatedCards])
  }

  const cameraElements = cards.map((camera) => {
    return (
      <Cameras 
        key={camera.id}
        duplicate={duplicateCard}
        delete={deleteCard}
        {...camera}
      />
    )
  })

  return (
    <>
      <header>
      <h1>Vintage Cameras!</h1>
      <h2>Your Budget: ${maxPrice}</h2>
      </header>
       <main className="camera-grid">
       {cameraElements}
        </main> 
    
    </>
  )
}

export default App
