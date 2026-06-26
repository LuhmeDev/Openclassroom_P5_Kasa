import './banner.css'

function Banner({image, alt = "Bannière", title}) {
  return (
    <div className="banner">
      <img
        src={image}
        alt={alt}
        className="banner-image"
      />
      <div className="banner-overlay" />
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  )
}

export default Banner