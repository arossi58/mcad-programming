import './App.css'
import { Link, Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Song } from './views/Song';
import musicData from "./assets/music-list.json";
function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/"> Home </Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path=":slug" element={<Song data={musicData} />}></Route>
    </Routes>
    </>
  )
}

export default App
