function Card({ name, location, description, recommendation, vibe, emoji }) {
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
    </div>
  )
}

export default Card