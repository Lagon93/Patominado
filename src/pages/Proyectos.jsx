import { useState } from 'react'

function Proyectos() {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      id: 1,
      name: "Base Principal",
      description: "La base principal del mundo de Patominado con todas las instalaciones básicas.",
      status: "completed",
      category: "Base",
      completedDate: "2024-10-15"
    },
    {
      id: 2,
      name: "Portal al Nether",
      description: "Portal construido para acceso rápido al Nether.",
      status: "completed",
      category: "Portal",
      completedDate: "2024-09-20"
    },
    {
      id: 3,
      name: "Granja de Trigo",
      description: "Granja automática de trigo para suministro de comida.",
      status: "completed",
      category: "Granja",
      completedDate: "2024-10-01"
    },
    {
      id: 4,
      name: "Mina de Diamantes",
      description: "Excavación completa hasta bedrock para obtener diamantes.",
      status: "completed",
      category: "Minería",
      completedDate: "2024-09-28"
    }
  ];

  const futureProjects = [
    {
      id: 5,
      name: "Castillo Medieval",
      description: "Gran castillo medieval con torres defensivas y salón principal.",
      status: "planned",
      category: "Construcción",
      priority: "alta"
    },
    {
      id: 6,
      name: "Sistema de Redstone",
      description: "Red de redstone para automatizar todas las granjas y sistemas.",
      status: "in-progress",
      category: "Redstone",
      priority: "media"
    },
    {
      id: 7,
      name: "Ciudad Comercial",
      description: "Ciudad con aldeanos comerciantes y sistema de intercambio.",
      status: "planned",
      category: "Ciudad",
      priority: "baja"
    },
    {
      id: 8,
      name: "Granja de Mob",
      description: "Granja automática para obtener recursos de mobs.",
      status: "planned",
      category: "Granja",
      priority: "alta"
    },
    {
      id: 9,
      name: "Exploración del End",
      description: "Expedición completa para explorar las End Cities.",
      status: "planned",
      category: "Exploración",
      priority: "media"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green';
      case 'in-progress': return 'bg-orange';
      case 'planned': return 'bg-blue';
      default: return 'bg-gray';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta': return 'bg-red';
      case 'media': return 'bg-yellow';
      case 'baja': return 'bg-teal';
      default: return 'bg-gray';
    }
  };

  return (
    <div className="page-container">
      <h1>Proyectos</h1>
      <p>Explora todos los proyectos de la serie Patominado: completados y futuros planes.</p>
      
      {/* Tab Navigation */}
      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          ✅ Proyectos Completados ({completedProjects.length})
        </button>
        <button 
          className={`tab-button ${activeTab === 'future' ? 'active' : ''}`}
          onClick={() => setActiveTab('future')}
        >
          🚧 Proyectos Futuros ({futureProjects.length})
        </button>
      </div>

      {/* Completed Projects */}
      {activeTab === 'completed' && (
        <div className="projects-section">
          <div className="projects-grid">
            {completedProjects.map((project) => (
              <div key={project.id} className={`project-card ${getStatusColor(project.status)}`}>
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className="project-status completed">✅ Completado</span>
                  <span className="project-date">Finalizado: {project.completedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Future Projects */}
      {activeTab === 'future' && (
        <div className="projects-section">
          <div className="projects-grid">
            {futureProjects.map((project) => (
              <div key={project.id} className={`project-card ${getStatusColor(project.status)}`}>
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className={`project-status ${project.status}`}>
                    {project.status === 'in-progress' ? '🚧 En Progreso' : '📋 Planeado'}
                  </span>
                  <span className={`project-priority ${getPriorityColor(project.priority)}`}>
                    Prioridad: {project.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Proyectos