import Banner from '../../components/banner/Banner'
import CardsGrid from '../../components/cardsgrid/CardsGrid'
import CoastalCliffs from '../../assets/coastal-cliffs.png'

import './accueil.css'

function Home() {
  return (
    <div className="home-container">
      <Banner image={CoastalCliffs} alt='Falaises côtières' title={"Chez vous, partout et ailleurs"}/> 
      <CardsGrid/>
    </div>
  )
}

export default Home