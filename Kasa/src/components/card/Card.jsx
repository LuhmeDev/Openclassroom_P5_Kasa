import './card.css'
import { Link } from 'react-router-dom'

function Card({id, title, imageUrl }) {
  return (
    <Link to={`/logement-detail/${id}`}>
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card