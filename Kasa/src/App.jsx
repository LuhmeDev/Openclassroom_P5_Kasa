import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Accueil'
import About from './pages/About'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App