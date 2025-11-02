import { useState, useEffect } from 'react'

function Coordenadas() {
  const [coordinates, setCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/coords.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCoordinates(data.locations);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching coordinates:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Group coordinates by plane
  const groupedCoordinates = coordinates.reduce((groups, location) => {
    const plane = location.plane;
    if (!groups[plane]) {
      groups[plane] = [];
    }
    groups[plane].push(location);
    return groups;
  }, {});

  // Define plane order and display names
  const planeInfo = {
    'overworld': { name: 'Overworld', icon: 'blocks/Grass_Block.png', color: 'bg-green' },
    'nether': { name: 'Nether', icon: 'blocks/Nether_Bricks.png', color: 'bg-red' },
    'end': { name: 'The End', icon: 'blocks/End_Stone.png', color: 'bg-purple' }
  };

  if (loading) return <div className="page-container">Cargando coordenadas...</div>;
  if (error) return <div className="page-container">Error: {error}</div>;

  return (
    <div className="page-container">
      <h1>Coordenadas</h1>
      <p>Explora las coordenadas importantes del mundo de Patominado.</p>
      
      {Object.keys(planeInfo).map(plane => (
        groupedCoordinates[plane] && (
          <div key={plane} className="plane-section">
            <h2 className={`plane-title ${planeInfo[plane].color}`}>
              <img className="plane-icon" src={planeInfo[plane].icon} alt={planeInfo[plane].name} />
              {planeInfo[plane].name}
            </h2>
            
            <div className="coords-grid">
              {groupedCoordinates[plane].map((location, index) => (
                <div key={index} className={`coord-card ${planeInfo[plane].color}`}>
                  <h3>{location.name}</h3>
                  <div className="coordinates">
                    <span>X: {location.coords.x}</span>
                    <span>Y: {location.coords.y}</span>
                    <span>Z: {location.coords.z}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  )
}

export default Coordenadas