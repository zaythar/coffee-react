import { useState } from 'react'
import Card from './Card'
import './style.css'

const coffeeSpots = [
  { name: "Filigree", location: "Hamlin, FL", description: "Reminds me of my favorite coffee shop in Glendale LA, where the coffee is the focus.", recommendation: "The Espresso Tonic", vibe: "Coffeehouse", emoji: "☕" },
  { name: "Qreate", location: "Mills Ave, Orlando", description: "Solid coffee and a really great vibe.", recommendation: "Special Drinks", vibe: "Artsy", emoji: "✨" },
  { name: "7 Brew", location: "Clermont, FL", description: "Full customization, sugar-free options when you want them.", recommendation: "Sugar-Free Sweet & Salty", vibe: "Customizable", emoji: "🧋" },
  { name: "Kiki's Breakfast Cafe", location: "Clermont, FL", description: "Simple, solid diner coffee. Sometimes that's exactly what you need.", recommendation: "House Coffee", vibe: "Diner", emoji: "☕" }
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' 
    ? coffeeSpots 
    : coffeeSpots.filter(spot => spot.vibe === activeFilter)

  return (
    <div>
      <header>
        <h1>Wendy's <span>Coffee</span> Spots</h1>
        <p>Coffee worth an adventure.</p>
      </header>
      <main>
        <p className="section-label">My Current Favorites</p>
        <div className="filters">
          {['All', 'Coffeehouse', 'Artsy', 'Customizable', 'Diner'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="cards">
          {filtered.map(spot => (
            <Card key={spot.name} {...spot} />
          ))}
        </div>
      </main>
      <footer>
        <p>Built by Wendy &mdash; learning React.</p>
      </footer>
    </div>
  )
}

export default App