import Card from '../card/Card'
import './cardsgrid.css'

function CardsGrid({ locations = mockLocations }) {
  return (
    <div className="cards-grid">
      {locations.map((location) => (
        <Card key={location.id} title={location.title} imageUrl={location.image} />
      ))}
    </div>
  );
}

const mockLocations = [
  { id: 1, title: 'Titre de la location', image: '' },
  { id: 2, title: 'Titre de la location', image: '' },
  { id: 3, title: 'Titre de la location', image: '' },
  { id: 4, title: 'Titre de la location', image: '' },
  { id: 5, title: 'Titre de la location', image: '' },
  { id: 6, title: 'Titre de la location', image: '' },
];

export default CardsGrid