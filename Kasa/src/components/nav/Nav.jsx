import { Link } from 'react-router-dom'
import logo from '../../assets/LogoNav.png'
import './nav.css'

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo Kasa Nav" className="logo-image"/>
      <div className='nav-link'>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </div>
    </nav>
  )
}

export default Nav