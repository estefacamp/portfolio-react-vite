import { useState } from "react";

function Skills({ skillGroups, learningNow = [] }) {
  const [expandedGroups, setExpandedGroups] = useState({});

  const descriptions = {
    Frontend: "Interfaces claras, responsivas y con foco en experiencia de usuario.",
    "Backend y APIs": "Conexión de servicios, lógica del servidor y manejo de datos.",
    "Fundamentos técnicos": "Bases clave para construir soluciones web consistentes.",
    "Herramientas de desarrollo": "Workflow, testing, versionado y productividad diaria.",
    "Build y deploy": "Entornos modernos para desarrollo, build y publicación.",
  };

  const themeMap = {
    Frontend: {
      bar: "linear-gradient(90deg, #00c6ff, #0072ff)",
      glow: "rgba(0, 198, 255, 0.18)",
      chipBg: "rgba(0, 198, 255, 0.10)",
      chipBorder: "rgba(0, 198, 255, 0.24)",
      iconBg: "rgba(0, 198, 255, 0.14)",
    },
    "Backend y APIs": {
      bar: "linear-gradient(90deg, #00ffa3, #00b894)",
      glow: "rgba(0, 255, 163, 0.18)",
      chipBg: "rgba(0, 255, 163, 0.10)",
      chipBorder: "rgba(0, 255, 163, 0.22)",
      iconBg: "rgba(0, 255, 163, 0.14)",
    },
    "Fundamentos técnicos": {
      bar: "linear-gradient(90deg, #00dcb4, #008cff)",
      glow: "rgba(0, 220, 180, 0.16)",
      chipBg: "rgba(0, 220, 180, 0.10)",
      chipBorder: "rgba(0, 220, 180, 0.22)",
      iconBg: "rgba(0, 220, 180, 0.14)",
    },
    "Herramientas de desarrollo": {
      bar: "linear-gradient(90deg, #20c997, #0d6efd)",
      glow: "rgba(32, 201, 151, 0.16)",
      chipBg: "rgba(32, 201, 151, 0.10)",
      chipBorder: "rgba(32, 201, 151, 0.22)",
      iconBg: "rgba(32, 201, 151, 0.14)",
    },
    "Build y deploy": {
      bar: "linear-gradient(90deg, #0dcaf0, #198754)",
      glow: "rgba(13, 202, 240, 0.16)",
      chipBg: "rgba(13, 202, 240, 0.10)",
      chipBorder: "rgba(13, 202, 240, 0.22)",
      iconBg: "rgba(13, 202, 240, 0.14)",
    },
  };

  const learningTheme = {
    bar: "linear-gradient(90deg, #20c997, #0072ff)",
    glow: "rgba(32, 201, 151, 0.16)",
    chipBg: "rgba(32, 201, 151, 0.10)",
    chipBorder: "rgba(32, 201, 151, 0.22)",
    iconBg: "rgba(32, 201, 151, 0.14)",
  };

  const toggleGroup = (title) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section id="skills" className="section-block">
      <div className="container-custom">
        <div className="section-title reveal text-center">
          <span>Skills</span>
          <h2>Stack técnico y herramientas</h2>
          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "760px",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Tecnologías, herramientas y fundamentos con los que construyo
            proyectos web funcionales, claros y listos para seguir creciendo.
          </p>
        </div>

        <div className="row g-4 mt-1">
          {skillGroups.map((group) => {
            const theme = themeMap[group.title] || learningTheme;
            const isExpanded = expandedGroups[group.title];
            const visibleSkills = isExpanded
              ? group.skills
              : group.skills.slice(0, 5);

            return (
              <div className="col-12 col-lg-6 reveal" key={group.title}>
                <div
                  className="card border-0 shadow-lg text-white h-100 overflow-hidden rounded-4 position-relative"
                  style={{
                    background: "rgba(9, 20, 40, 0.92)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: `0 18px 45px rgba(0,0,0,0.24), 0 0 24px ${theme.glow}`,
                  }}
                >
                  <div
                    style={{
                      height: "4px",
                      width: "100%",
                      background: theme.bar,
                    }}
                  ></div>

                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "140px",
                      height: "140px",
                      top: "-45px",
                      right: "-35px",
                      background: theme.glow,
                      filter: "blur(38px)",
                      opacity: 0.9,
                    }}
                  ></div>

                  <div className="card-body p-4 position-relative">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-4 flex-shrink-0"
                        style={{
                          width: "54px",
                          height: "54px",
                          background: theme.iconBg,
                          border: `1px solid ${theme.chipBorder}`,
                          boxShadow: `0 0 16px ${theme.glow}`,
                        }}
                      >
                        <i className={`${group.icon || "bi bi-code-slash"} fs-4`}></i>
                      </div>

                      <div>
                        <h3 className="h5 mb-1">{group.title}</h3>
                        <p
                          className="mb-0"
                          style={{
                            color: "rgba(255,255,255,0.68)",
                            lineHeight: "1.45",
                          }}
                        >
                          {descriptions[group.title] ||
                            "Tecnologías aplicadas a mi perfil actual."}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mt-4">
                      {visibleSkills.map((skill, index) => {
                        const label =
                          typeof skill === "string" ? skill : skill.name;

                        return (
                          <span
                            key={`${group.title}-${label}-${index}`}
                            className="badge rounded-pill px-3 py-2 fw-medium"
                            style={{
                              background: theme.chipBg,
                              border: `1px solid ${theme.chipBorder}`,
                              color: "#fff",
                              fontSize: "0.92rem",
                              backdropFilter: "blur(8px)",
                              WebkitBackdropFilter: "blur(8px)",
                            }}
                          >
                            {label}
                          </span>
                        );
                      })}
                    </div>

                    {group.skills.length > 5 && (
                      <button
                        type="button"
                        className="btn btn-sm mt-4"
                        onClick={() => toggleGroup(group.title)}
                        style={{
                          border: `1px solid ${theme.chipBorder}`,
                          color: "#fff",
                          background: "rgba(255,255,255,0.04)",
                          borderRadius: "999px",
                          padding: "8px 16px",
                        }}
                      >
                        {isExpanded ? "Ver menos" : "Ver más"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {learningNow.length > 0 && (
            <div className="col-12 reveal">
              <div
                className="card border-0 shadow-lg text-white overflow-hidden rounded-4 position-relative"
                style={{
                  background: "rgba(9, 20, 40, 0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: `0 18px 45px rgba(0,0,0,0.24), 0 0 24px ${learningTheme.glow}`,
                }}
              >
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    background: learningTheme.bar,
                  }}
                ></div>

                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: "140px",
                    height: "140px",
                    top: "-45px",
                    right: "-35px",
                    background: learningTheme.glow,
                    filter: "blur(38px)",
                    opacity: 0.9,
                  }}
                ></div>

                <div className="card-body p-4 position-relative">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-4 flex-shrink-0"
                      style={{
                        width: "54px",
                        height: "54px",
                        background: learningTheme.iconBg,
                        border: `1px solid ${learningTheme.chipBorder}`,
                        boxShadow: `0 0 16px ${learningTheme.glow}`,
                      }}
                    >
                      <i className="bi bi-mortarboard fs-4"></i>
                    </div>

                    <div>
                      <h3 className="h5 mb-1">En formación</h3>
                      <p
                        className="mb-0"
                        style={{
                          color: "rgba(255,255,255,0.68)",
                          lineHeight: "1.45",
                        }}
                      >
                        Tecnologías y áreas en las que continúo profundizando
                        para seguir creciendo profesionalmente.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {learningNow.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="badge rounded-pill px-3 py-2 fw-medium"
                        style={{
                          background: learningTheme.chipBg,
                          border: `1px solid ${learningTheme.chipBorder}`,
                          color: "#fff",
                          fontSize: "0.92rem",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;