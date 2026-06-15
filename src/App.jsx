import { useState } from 'react'
import Card from './Card'
import './style.css'

const coffeeSpots = [
  { name: "Filigree", location: "Winter Garden, FL", address: "16016 New Independence Pkwy Ste 110, Winter Garden, FL 34787", description: "Reminds me of my favorite coffee shop in Glendale LA, where the coffee is the focus.", recommendation: "The Espresso Tonic", vibe: "Coffeehouse", emoji: "☕", instagram: "https://www.instagram.com/filigreecoffeeco", photo: "/images/filigree-sign.jpg" },
  { name: "Qreate", location: "Orlando, FL", address: "1212 Woodward St #1, Orlando, FL 32803", description: "Solid coffee in an artistic setting where you feel safe.", recommendation: "Special Drinks", vibe: "Artsy", emoji: "✨", instagram: "https://www.instagram.com/qreatecoffee", photo: "/images/qreate-coffee.jpg" },
  { name: "Gurch Coffee", location: "Clermont, FL", address: "821 w. Minneola ave, Clermont, Florida 34711", description: "Coffee and community focused.", recommendation: "Iced Latte-Sesame Honey", vibe: "Coffeehouse", emoji: "☕", instagram: "https://www.instagram.com/gurchcoffeeco/", photo: null },
  { name: "RedBand Coffee Co", location: "Davenport, IA", address: "329 E 4th St, Davenport, IA 52801", description: "Small local shop serving quality coffee.", recommendation: "New Orleans Style Ice Coffee", vibe: "Coffeehouse", emoji: "🧋", instagram: null, website: "https://redbandcoffee.com/", photo: null },
  { name: "7 Brew", location: "Clermont, FL", address: "17445 Us Hwy 192 W, Clermont, FL 34714", description: "Full customization, sugar-free options when you want them.", recommendation: "Sugar-Free Sweet & Salty", vibe: "Coffeehouse", emoji: "🧋", instagram: "https://www.instagram.com/7brewcoffee", photo: null },
  { name: "Keke's Breakfast Cafe", location: "Kissimmee, FL", address: "8031 W Irlo Bronson Memorial Hwy, Kissimmee, FL 34747", description: "Simple, solid diner coffee. Sometimes that's exactly what you need.", recommendation: "House Coffee", vibe: "Diner", emoji: "☕", instagram: "https://www.instagram.com/kekesbreakfastcafe", photo: null }
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