
import './App.css'
import animalData from "./animalData"
import Animal from './Animal'

function App() {

  return (
    <>
      {animalData.map((animals)=>(
        <Animal 
          key={animals.name}
          {...animals}
        />
      ))}
    
    </>
  )
}

export default App
