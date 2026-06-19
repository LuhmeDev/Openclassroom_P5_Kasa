import { Link } from 'react-router-dom'
import '../CSS/Nav.css'

function Nav() {
  return (
    <nav className="nav">
        <img
        src="src\assets\LOGO.png"
        alt="Falaises côtières"
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