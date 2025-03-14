
import './App.css'
import animalData from "./animalData"
import Animal from './Animal'
import { useState } from 'react'

function App() {
  const [animalList, setAnimalList] = useState(animalData)
  const [headline, setHeadline] = useState("Learn about animals!");
  const [description, setDescription] = useState("Focus for some fun facts!")
  const [animalImg, setAnimalImg] = useState("https://sandiegozoowildlifealliance.org/sites/default/files/hero/5881_SWA24_SDZ-Fact-Sheet_web-hero_1920x1067.jpg")
  const [animalAlt, setAnimalAlt] = useState("entrance to a zoo")


  function removeAnimal(animalToRemove) {
    const updatedAnimals = animalList.filter(animal => animal.name !== animalToRemove.name);
    setAnimalList(updatedAnimals);
  }

  function focusAnimal(animal) {
    setHeadline(animal.name);
    setDescription(animal.description);
    setAnimalImg(animal.image);
    setAnimalAlt(animal.alt);
  }
  

  return (
    <>
    <header>
      <h1>{headline}</h1>
      <p>{description}</p>
      <img src={animalImg} alt={animalAlt} className="hero-img"/>
    </header>
      {animalList.map((animal)=>(
        <Animal 
          key={animal.name}
          focus={() => focusAnimal(animal)}
          delete={() => removeAnimal(animal)}
          {...animal}
        />
      ))}
    
    </>
  )
}

export default App
