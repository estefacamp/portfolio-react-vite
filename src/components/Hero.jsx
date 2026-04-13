import { useState } from "react";

function Hero({ profile, stats }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>

      <div className="container-custom hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">{profile.role}</span>

          <h1>
            Construyo experiencias web claras, funcionales y
            <span> orientadas a resolver problemas reales.</span>
          </h1>

          <p className="hero-text">{profile.heroText}</p>

          <div className="hero-cta">
            <a href="#portfolio" className="btn-primary-custom">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn-secondary-custom">
              Contactarme
            </a>
          </div>

          <div className="hero-chips">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>APIs REST</span>
            <span>Git/GitHub</span>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-card">
            <div className="profile-image-wrap">
              <img src="/img/campisi.png" alt={profile.name} />
            </div>

            <div className="floating-tag tag-1">UI limpia</div>
            <div className="floating-tag tag-2">Responsive</div>
            <div className="floating-tag tag-3">IT Jr</div>

            <div className="profile-info">
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>

              <div className="social-row">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <button onClick={handleCopyEmail} className="social-mail-btn">
                  <i className="bi bi-envelope"></i>
                </button>
              </div>

              {copied && <small className="copy-feedback">Mail copiado</small>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;