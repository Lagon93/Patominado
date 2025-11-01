import Avatar from './avatar'

export default function Header() {
  return (
    <header className="header">
      <div className="header-card">
        <img src="/PATOMINADO.png" alt="patominado" />
        <p className="header-subtitle">Bienvenido, viajero, a Patominado, un mundo forjado bloque a bloque bajo la mirada del Pato.</p>
        <p className="header-description">
          Aquí podrás consultar los registros de mis hazañas, los mapas con coordenadas sagradas y los proyectos que darán forma al futuro de este reino.
          Cada estadística cuenta una historia, cada construcción guarda un propósito… y tú eres testigo del legado que se está escribiendo.
        </p>
        <p>Sigue las crónicas en directo en <a href="https://www.twitch.tv/lagon93" target='blank'><img className="twitch_icon" src="/glitch_flat_purple.png" alt="" />/lagon93</a> y presencia cómo el mundo de Patominado continúa expandiéndose y presencia cómo el mundo de Patominado continúa expandiéndose.</p>
      </div>
      <div className="avatar-container">
        <Avatar />
      </div>
    </header>
  )
}