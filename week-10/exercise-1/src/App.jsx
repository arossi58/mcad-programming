import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/home'
import { Llamas } from './views/Llamas'
import { Alpaca } from './views/Alpaca'

function App() {

  return (
    <>
      <ul className="nav">
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpaca">Alpacas</Link></li>
        <li className='logo'> <Link to="/">🦙</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/llamas" element={<Llamas />}/>
        <Route path="/alpaca" element={<Alpaca />}/>
      </Routes>
    </>
  )
}

export default App
