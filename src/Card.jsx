import { useState } from 'react'

function Card({ name, location, address, description, recommendation, vibe, emoji, instagram, website, photo }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card">
      <span className="card-emoji">{emoji}</span>
      <h2>{name}</h2>
      <p className="location">{location}</p>
      <p className="description">{description}</p>
      <div className="card-footer">
        <p className="recommendation"><span className="try-label">Try:</span> {recommendation}</p>
        <span className="vibe">{vibe}</span>
      </div>
      <button className="expand-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Less ↑' : 'More ↓'}
      </button>
      {isOpen && (
        <div className="expanded">
          <p className="address">📍 {address}</p>
          {photo && <img src={photo} alt={name} className="card-photo" />}
          {instagram && <a href={instagram} target="_blank" rel="noreferrer" className="instagram-link">Instagram →</a>}
          {website && <a href={website} target="_blank" rel="noreferrer" className="instagram-link">Website →</a>}
        </div>
      )}
    </div>
  )
}

export default Card