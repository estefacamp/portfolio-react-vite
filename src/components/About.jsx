function About({ aboutCards }) {
    return (
      <section id="sobremi" className="section-block">
        <div className="container-custom">
          <div className="section-title reveal">
            <span>Sobre mí</span>
            <h2>Perfil con base técnica y experiencia en gestión real</h2>
          </div>
  
          <div className="about-grid">
            {aboutCards.map((card) => (
              <article className="glass-card reveal" key={card.title}>
                <h3>
                  <i className={card.icon}></i> {card.title}
                </h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default About;