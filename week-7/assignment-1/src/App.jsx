
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
      <h1>Maximum Camera Budget: ${maxPrice}</h1>
       <div className="camera-grid">
       {cameraElements}
        </div> 
    
    </>
  )
}

export default App
