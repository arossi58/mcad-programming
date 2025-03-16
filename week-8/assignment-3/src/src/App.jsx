
import './App.css'
import Cameras from './Cameras'
import Data from './Data'
import { maxPrice } from './Cameras'


function App() {

  const cameraElements = Data.map((camera) => {
    return (
      <Cameras 
        key={camera.id}
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
