
import './App.css'
import Cameras from './Cameras'
import Data from './Data'
import { maxPrice } from './Cameras'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import NewItemForm from './NewItemForm';

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

  function addCard(itemData) {
    const newItem = { id: nanoid(), ...itemData };
    setCards([...cards, newItem]);
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
      <main>
        <h3 className="form-header">Add a camera to your wishlist</h3>
        <NewItemForm addCard={addCard} />
        <div className="camera-grid">
          {cameraElements}
        </div> 
      </main>
       
    
    </>
  )
}

export default App
