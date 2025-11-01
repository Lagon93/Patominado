import fs from "fs";
import path from "path";


// 📂 Ruta completa a tus estadísticas
const statsPath = path.resolve(
  `C:\\Users\\teixg\\curseforge\\minecraft\\Instances\\Patominado\\saves\\Patominado\\stats`
);

// 📄 Coge el primer archivo de la carpeta (tu UUID)
const files = fs.readdirSync(statsPath);
const jsonPath = path.join(statsPath, files[0]);

// 📖 Leer y parsear el JSON original de Minecraft
const raw = fs.readFileSync(jsonPath, "utf8");
const data = JSON.parse(raw);

// 🧠 Crear un resumen más legible
const summary = {
  mobKills: data.stats["minecraft:custom"]?.["minecraft:mob_kills"] ?? 0,
  muertes: data.stats["minecraft:custom"]?.["minecraft:deaths"] ?? 0,
  tiempoJugadoMinutos: Math.floor(
    (data.stats["minecraft:custom"]?.["minecraft:total_world_time"] ?? 0) / 1200
  ),
  tradeos: data.stats["minecraft:custom"]?.["minecraft:traded_with_villager"] ?? 0,
  mostUsedItem: {
    item: Object.entries(data.stats["minecraft:used"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[0]
      .replace("minecraft:", "") ?? "Ninguno",
    count: Object.entries(data.stats["minecraft:used"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[1] ?? 0
  },
  mostCraftedItem: {
    item: Object.entries(data.stats["minecraft:crafted"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[0]
      .replace("minecraft:", "") ?? "Ninguno",
    count: Object.entries(data.stats["minecraft:crafted"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[1] ?? 0
  },
  mostMinedBlock: {
    item: Object.entries(data.stats["minecraft:mined"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[0]
      .replace("minecraft:", "") ?? "Ninguno",
    count: Object.entries(data.stats["minecraft:mined"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[1] ?? 0
  },
  mostDroppedItem: {
    item: Object.entries(data.stats["minecraft:dropped"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[0].replace("minecraft:", "") ?? "Ninguno",
    count: Object.entries(data.stats["minecraft:dropped"] ?? {})
      .sort((a, b) => b[1] - a[1])[0]?.[1] ?? 0
  }
};

// 💾 Guardar el resumen en tu carpeta pública del proyecto web
fs.writeFileSync("./public/stats.json", JSON.stringify(summary, null, 2));

console.log("✅ Estadísticas actualizadas con éxito");
