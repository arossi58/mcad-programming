import '../App.css'
import Cameras from '../Cameras'
import { maxPrice } from '../Cameras'
import { nanoid } from 'nanoid'
import NewItemForm from '../NewItemForm';

function Home({ cards, setCards }) {

  function deleteCard(id) {
    const updatedArray = cards.filter((camera) => camera.id !== id)
    setCards(updatedArray)
  }

  function duplicateCard(id) {
    const matchingCard = cards.find((camera) => camera.id === id)
    const updatedCard = { ...matchingCard, id: nanoid() }
    setCards([...cards, updatedCard])
  }

  function addCard(itemData) {
    const newItem = { id: nanoid(), ...itemData }
    setCards([...cards, newItem])
  }

  const cameraElements = cards.map((camera) => (
    <Cameras 
      key={camera.id}
      duplicate={duplicateCard}
      delete={deleteCard}
      {...camera}
    />
  ))

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

export default Home;
