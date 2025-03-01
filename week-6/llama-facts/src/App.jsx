
import './App.css'

function App() {
  const llamaFacts = [
    "Llamas are domesticated South American camelids.",
    "They are commonly used as pack animals and for their wool.",
    "Llamas have a gentle temperament and are often friendly.",
    "They can carry up to 25-30% of their body weight.",
    "Llamas communicate with humming sounds and body language.",
    "They are known to spit when they feel threatened or annoyed.",
    "Llamas have been used to guard sheep from predators.",
    "Their fleece comes in a variety of colors and is highly valued."
  ];

  const colorFulLlamas = true;

  const llamaBonusFacts = [
    "Llammas can be a range of colors!",
    "Llamas are not very colorful 😒"
  ]
  
  function llamaList() {
    const listItems = [];
    for (let i = 0; i<llamaFacts.length; i++) {
      listItems.push(<li>{llamaFacts[i]}</li>)
    }

    return (
      <main>
        <h1>Llama facts!! 🦙</h1>
        <ul>
          {listItems}
          <li>{colorFulLlamas? llamaBonusFacts[0] : llamaBonusFacts[1]}</li>
        </ul>
      </main>
      )

  }
  
  return llamaList();
  
}

export default App
