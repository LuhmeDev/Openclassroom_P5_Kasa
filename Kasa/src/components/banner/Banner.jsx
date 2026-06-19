import './banner.css'

function Banner() {
  return (
    <div className="banner">
      <img
        src="src\assets\coastal-cliffs.png"
        alt="Falaises côtières"
        className="banner-image"
      />
      <div className="banner-overlay" />
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner