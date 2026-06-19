import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <nav className="nav">
        <img
        src="src\assets\LogoNav.png"
        alt="Logo Kasa Nav"
        className="logo-image"
      />
      <div className='nav-link'>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </nav>
  )
}

export default Nav