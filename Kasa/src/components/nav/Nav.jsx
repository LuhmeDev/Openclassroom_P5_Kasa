import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/LogoNav.png'
import './nav.css'

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo Kasa Nav" className="logo-image"/>
      <div className='nav-link'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
    </nav>
  )
}

export default Nav