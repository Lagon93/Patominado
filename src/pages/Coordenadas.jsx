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

  if (loading) return <div className="page-container">Cargando coordenadas...</div>;
  if (error) return <div className="page-container">Error: {error}</div>;

  return (
    <div className="page-container">
      <h1>Coordenadas</h1>
      <p>Explora las coordenadas importantes del mundo de Patominado.</p>
      
      <div className="coords-grid">
        {coordinates.map((location, index) => (
          <div key={index} className="coord-card">
            <h3>{location.name}</h3>
            <p className="plane">{location.plane}</p>
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
}

export default Coordenadas