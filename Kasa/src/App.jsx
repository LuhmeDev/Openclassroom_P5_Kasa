import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Home from './pages/Accueil/Accueil'
import About from './pages/About/About'
import Footer from './components/footer/Footer'
import Error404 from './pages/404/Error404'
import LocationDetail from './pages/LocationDetail/LocationDetail'
import './CSS/app.css'

function App() {
  return (
    <div className="container">
      <Nav />
      <main className='main-container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/logement-detail/:id" element={<LocationDetail/>}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App