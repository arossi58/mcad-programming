
function App() {
  const computer = true;
  const name = "Andrew";
  return (
    <p>Hello World! I'm { name } and I wrote this on my { computer ? (<p>dekstop computer</p> ) : (<p> fancy tablet</p>)} </p>
  )
}

export default App
