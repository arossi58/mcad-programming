
import './App.css'
import Camelid from "./Camelid.jsx"

const animal = [
  {
      title:"Llama",
      trivia:"Llamas are effective guard animals because of their excellent vision and sense of smell. They are often used to guard herds of alpacas.", 
      image:"./src/assets/cria.jpg",
      alt:"A cute llama looking at you" },
      
  {
      title:"Alpaca",
      trivia:"Around 6000 years ago the Andean people started to domesticate alpacas",
      image:"./src/assets/alpaca.jpg",
      alt:"a group of alpacas in the mountains"
  }
];


export default function App() {
  return(
    <>
      <Camelid 
        image={animal[0].image}
        alt={animal[0].alt}
        title={animal[0].title}
        trivia={animal[0].trivia}
      />
      <Camelid 
        image={animal[1].image}
        alt={animal[1].alt}
        title={animal[1].title}
        trivia={animal[1].trivia}
      />
    </>
    
  )
}
