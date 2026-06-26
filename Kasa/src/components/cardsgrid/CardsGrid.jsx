import Card from '../card/Card'
import './cardsgrid.css'
import Data from '../../datas/data.json'

function CardsGrid({}) {
  return (
    <div className="cards-grid">
      {Data.map((data) => (
        <Card key={data.id} id={data.id} title={data.title} imageUrl={data.cover} />
      ))}
    </div>
  );
}

// const mockLocations = [
//   { id: 1, title: 'Titre de la location', image: '' },
//   { id: 2, title: 'Titre de la location', image: '' },
//   { id: 3, title: 'Titre de la location', image: '' },
//   { id: 4, title: 'Titre de la location', image: '' },
//   { id: 5, title: 'Titre de la location', image: '' },
//   { id: 6, title: 'Titre de la location', image: '' },
// ];

export default CardsGrid