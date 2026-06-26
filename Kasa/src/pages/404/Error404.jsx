import { Link } from 'react-router-dom'
import './Error404.css'

function Error404() {
  return (
    <div className='container-404'>
        <h2 className='title-404'>404</h2>
        <p className='p-404'>Oups! La page que vous demandez n'existe pas</p>
        <Link to="/" className="button-404">Retourner sur la page d’accueil</Link>
    </div>
  )
}



export default Error404