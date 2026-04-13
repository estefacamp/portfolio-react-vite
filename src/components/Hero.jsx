import { useState } from "react";
import campisiPhoto from "../assets/campisi.jpg";

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
            {profile.name}
            <span> {profile.subtitle}</span>
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

        <div className="hero-visual reveal w-100">
          <div className="row g-3 align-items-start w-100">
            <div className="col-4">
              <div className="d-flex flex-column gap-3">
                <div
                  className="card border-0 shadow-lg overflow-hidden"
                  style={{
                    background: "rgba(9, 20, 40, 0.88)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "22px",
                  }}
                >
                  <img
                    src={campisiPhoto}
                    alt={`Foto de ${profile.name}`}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  className="card border-0 shadow-lg"
                  style={{
                    background: "rgba(9, 20, 40, 0.88)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "22px",
                  }}
                >
                  <div className="card-body p-3 text-center text-white">
                    <div className="d-flex justify-content-center gap-2 mb-2 flex-wrap">
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "42px", height: "42px" }}
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>

                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "42px", height: "42px" }}
                      >
                        <i className="bi bi-github"></i>
                      </a>

                      <button
                        onClick={handleCopyEmail}
                        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                        aria-label="Copiar email"
                        type="button"
                        style={{ width: "42px", height: "42px" }}
                      >
                        <i className="bi bi-envelope"></i>
                      </button>
                    </div>

                    {copied && (
                      <small className="d-block text-info">Mail copiado</small>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-8">
              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  background: "rgba(9, 20, 40, 0.88)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "22px",
                }}
              >
                <div className="card-body p-4 text-white">
                  <span className="badge rounded-pill text-bg-light text-dark mb-3">
                    Disponible para roles Jr / Trainee
                  </span>

                  <h3 className="h5 mb-1">{profile.name}</h3>
                  <p className="mb-3 text-white-50">{profile.location}</p>

                  <div className="d-flex flex-column gap-2 mb-3">
                    <div className="rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10">
                      <i className="bi bi-code-square me-2"></i>
                      Frontend con React y JavaScript
                    </div>

                    <div className="rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10">
                      <i className="bi bi-database me-2"></i>
                      Base backend con Node.js y APIs REST
                    </div>

                    <div className="rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10">
                      <i className="bi bi-briefcase me-2"></i>
                      Experiencia en gestión y análisis de procesos
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-decoration-none text-white rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10"
                    >
                      <i className="bi bi-envelope me-2"></i>
                      {profile.email}
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-white rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10"
                    >
                      <i className="bi bi-linkedin me-2"></i>
                      LinkedIn
                    </a>

                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-white rounded-4 px-3 py-2 bg-dark bg-opacity-25 border border-light border-opacity-10"
                    >
                      <i className="bi bi-github me-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;  