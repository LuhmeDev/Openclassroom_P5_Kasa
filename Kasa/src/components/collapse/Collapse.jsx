import { useState } from "react";
import './collapse.css'
import Chevron from '../../assets/chevron.png'

export default function Collapse({ title, description, maxWidth }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="collapse-description">
          {description.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    }
    return <p className="collapse-description">{description}</p>
  }

  return (
    <div className="collapse-container" style={{ maxWidth }}>
      <div className="collapse-header">
        <span>{title}</span>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={Chevron}
            alt="chevron"
            className={isOpen ? "chevron open" : "chevron"}
          />
      </div>
      {isOpen && renderDescription()}
    </div>
  );
}