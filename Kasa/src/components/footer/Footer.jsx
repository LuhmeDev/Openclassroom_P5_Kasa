import './footer.css'
import logofooter from '../../assets/LogoFooter.png'

function Footer() {
  return (
    <div className="footer-container">
      <img src={logofooter} alt="Logo Kasa Footer" className="logo-image-footer"/>
      <p className='p-footer'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer