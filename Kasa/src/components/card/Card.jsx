import './card.css'

function Card({ title, imageUrl }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
}

export default Card