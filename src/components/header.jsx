import Avatar from './avatar'

export default function Header() {
  return (
    <header className="header">
      <div className="header-card">
        <img src="/PATOMINADO.png" alt="patominado" />
        <p className="header-subtitle">Explora las coordenadas de la serie de Patominado en Minecraft.</p>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est expedita ipsa doloribus tenetur obcaecati dicta blanditiis optio. Reprehenderit autem eius eos amet perspiciatis tempora sed similique architecto totam commodi.
        </p>
      </div>
      <div className="avatar-container">
        <Avatar />
      </div>
    </header>
  )
}