import Banner from '../../components/banner/Banner'
import Mountain from '../../assets/mountain.png'
import Collapse from '../../components/collapse/Collapse'
import AboutData from '../../datas/about.json'
import './about.css'

function About() {
  return (
    <div className='about-container'>
        <Banner image={Mountain} alt='Montagne'/>
        <div className='about-collapse'>
          {AboutData.map((item) => (
            <Collapse key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
    </div>
  )
}

// const collapseData = [
//   { id:0, title: "Fiabilité", description: "Les annonces postés sur Kasa garatissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
//   { id:1, title: "Respect", description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
//   { id:2, title: "Service", description: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataire, soit empreinte de respect et de bienveillance." },
//   { id:3, title: "Sécurité", description: ".La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque " },
// ];

export default About