import starFull from '../../assets/fullstar.png'
import starEmpty from '../../assets/emptystar.png'

function StarRating({ rating }) {
  const total = 5
  const filled = parseInt(rating)

  return (
    <div className="stars">
      {Array.from({ length: total }, (_, i) => (
        <img
          key={i}
          src={i < filled ? starFull : starEmpty}
          alt={i < filled ? "étoile pleine" : "étoile vide"}
        />
      ))}
    </div>
  )
}

export default StarRating