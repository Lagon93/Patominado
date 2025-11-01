import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Coordenadas from './pages/Coordenadas'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/coordenadas" element={<Coordenadas />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
