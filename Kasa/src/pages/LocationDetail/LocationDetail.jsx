import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Data from '../../datas/data.json'
import Collapse from '../../components/collapse/Collapse'
import Rating from '../../components/rating/rating'
import './LocationDetail.css'

function LocationDetail() {
  const { id } = useParams()
  const logement = Data.find((item) => item.id === id)
  if (!logement) return <Navigate to="*" replace />
  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <div className="Locdetail-container">
      <Slideshow pictures={logement.pictures} title={logement.title}/>
        <div className='Locdetail-infos'>
            <div className='Locdetail-infos-left'>
                <div>
                    <h2 className="Locdetail-title">{logement.title}</h2>
                    <p className="Locdetail-location">{logement.location}</p>
                </div>
                <div className='Locdetail-container-tags'>
                    {logement.tags.map((tag, index) => (
                        <p key={index} className="Locdetail-tags">{tag}</p>
                    ))} 
                </div>          
            </div>
            <div>
                <div className='Locdetail-infos-right'>
                    <div className='Locdetail-infos-right-owmer'>
                        <div>
                            <p className='Loc-host-name'>
                                {firstName}<br />
                                {lastName}
                            </p>
                        </div>
                        <div>
                            <img className='Loc-host-picture' src={logement.host.picture} alt="" />
                        </div>
                    </div>
                    <div>
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            </div>
        </div>
        <div className='Loc-collapse'>
            <Collapse key="description" title="Description" description={logement.description}  maxWidth="582px"/>
            <Collapse key="equipements" title="Équipement"  description={logement.equipments}   maxWidth="582px"/>
        </div>
    </div>
  )
}

export default LocationDetail