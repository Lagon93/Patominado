
import { useEffect, useState } from "react";

function Stats() {
      const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then(setStats)
      .catch(console.error);
  }, []);

console.log(stats);
  if (!stats) return <p>Cargando estadísticas...</p>;

  const items = [
    { icon: "/blocks/Bone.png", label: "Muertes", value: stats.muertes, bgClass: "bg-yellow"},
    { icon: "/blocks/Zombie.png", label: "Mobs eliminados", value: stats.mobKills, bgClass: "bg-green" },
    { icon: "/blocks/Clock.png", label: "Tiempo jugado (min)", value: stats.tiempoJugadoMinutos, bgClass: "bg-blue" },
    { icon: "/blocks/Emerald.png", label: "Intercambios realizados", value: stats.tradeos, bgClass: "bg-purple" },
    { icon: "/blocks/Iron_Pickaxe.png", label: "Bloque más minado", value: <>{`${stats.mostMinedBlock.item.toUpperCase().slice(0, 1)}${stats.mostMinedBlock.item.replace(/_/g, ' ').slice(1)} `}<span className="count">{stats.mostMinedBlock.count}</span></>, bgClass: "bg-red" },
    { icon: "/blocks/Iron_Hoe.png", label: "Ítem más usado", value: <>{`${stats.mostUsedItem.item.toUpperCase().slice(0, 1)}${stats.mostUsedItem.item.replace(/_/g, ' ').slice(1)} `}<span className="count">{stats.mostUsedItem.count}</span></>, bgClass: "bg-orange" },
    { icon: "/blocks/Crafting_Table.png", label: "Ítem más fabricado", value: <>{`${stats.mostCraftedItem.item.toUpperCase().slice(0, 1)}${stats.mostCraftedItem.item.replace(/_/g, ' ').slice(1)} `}<span className="count">{stats.mostCraftedItem.count}</span></>, bgClass: "bg-teal" },
    { icon: "/blocks/Chest.png", label: "Ítem más soltado", value: <>{`${stats.mostDroppedItem.item.toUpperCase().slice(0, 1)}${stats.mostDroppedItem.item.replace(/_/g, ' ').slice(1)} `}<span className="count">{stats.mostDroppedItem.count}</span></>, bgClass: "bg-pink" },
  ];

  return (
    <div>
      <div className="stats-grid">
        {items.map((item) => (
          <div key={item.label} className={`stat-card ${item.bgClass}`}>
            <div className="stat-container"><img src={item.icon} alt={item.label} className="stat-icon" />
            <div className="stat-label">{item.label}</div></div>
            <div className="stat-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;