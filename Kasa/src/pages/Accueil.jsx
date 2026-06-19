import Banner from '../components/banner/Banner'
import CardsGrid from '../components/cardsgrid/CardsGrid'

import '../CSS/accueil.css'

function Home() {
  return (
    <div className="home-container">
      <Banner/>
      <CardsGrid/>
    </div>
  )
}

export default Home