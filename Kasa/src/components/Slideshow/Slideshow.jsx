import { useState } from 'react'
import './Slideshow.css'
import ChevronLeft from '../../assets/arrowleft.png'
import ChevronRight from '../../assets/arrowright.png'
function Slideshow({ pictures, title }) {
  const [imgIndex, setImgIndex] = useState(0)

  const prev = () => setImgIndex((i) => (i - 1 + pictures.length) % pictures.length)
  const next = () => setImgIndex((i) => (i + 1) % pictures.length)

  return (
    <div className="slideshow-container">
      <div className="slideshow-img-wrapper">
        <img src={pictures[imgIndex]} alt={`${title} - ${imgIndex + 1}`} />

        {pictures.length > 1 && (
          <>
            <div className='slideshow-arrows'>
              <button onClick={prev}><img src={ChevronLeft}/></button>
              <button onClick={next}><img src={ChevronRight}/></button>
            </div>
            <span className='slideshow-counter'>{imgIndex + 1} / {pictures.length}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default Slideshow