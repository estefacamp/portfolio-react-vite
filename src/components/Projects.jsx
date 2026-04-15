function Projects({
  categories,
  projectFilter,
  setProjectFilter,
  filteredProjects,
  selectedProject,
  setSelectedProject,
}) {
  return (
    <>
      <section id="portfolio" className="section-block">
        <div className="container">
          <div className="section-title reveal text-center mb-4">
            <span>Portfolio</span>
            <h2>Proyectos destacados</h2>
            <p
              className="mx-auto mb-0"
              style={{
                maxWidth: "680px",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Selección de proyectos desarrollados para fortalecer mi perfil en
              desarrollo web, organización de interfaces y resolución de
              problemas reales.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`btn rounded-pill ${
                  projectFilter === category ? "btn-primary" : "btn-outline-primary"
                }`}
                style={{
                  padding: "0.45rem 0.95rem",
                  fontSize: "0.88rem",
                }}
                onClick={() => setProjectFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row g-3 justify-content-center">
            {filteredProjects.map((project) => (
              <div className="col-12 col-md-6 col-xl-5" key={project.id}>
                <div
                  className="h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    maxWidth: "520px",
                    margin: "0 auto",
                    minHeight: "100%",
                    borderRadius: "22px",
                    background:
                      "linear-gradient(135deg, rgba(0,198,255,0.16) 0%, rgba(0,114,255,0.10) 38%, rgba(0,255,163,0.08) 62%, rgba(7,16,32,0.96) 100%)",
                    border: "1px solid rgba(0,198,255,0.18)",
                    boxShadow:
                      "0 16px 34px rgba(0,0,0,0.28), 0 0 22px rgba(0,198,255,0.10)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.55), rgba(255,255,255,0.10))",
                    }}
                  ></div>

                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "130px",
                      height: "130px",
                      top: "-45px",
                      right: "-35px",
                      background: "rgba(0,198,255,0.16)",
                      filter: "blur(38px)",
                      opacity: 0.9,
                    }}
                  ></div>

                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "110px",
                      height: "110px",
                      bottom: "-40px",
                      left: "-25px",
                      background: "rgba(0,255,163,0.10)",
                      filter: "blur(40px)",
                      opacity: 0.85,
                    }}
                  ></div>

                  <div
                    className="position-relative d-flex align-items-center justify-content-center"
                    style={{
                      minHeight: "82px",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    }}
                  >
                    <span
                      className="badge position-absolute top-0 end-0 rounded-pill"
                      style={{
                        margin: "12px",
                        fontSize: "0.72rem",
                        padding: "0.45rem 0.75rem",
                        background: "rgba(12,18,32,0.78)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#fff",
                      }}
                    >
                      {project.category}
                    </span>

                    <div
                      className="d-flex align-items-center justify-content-center rounded-4"
                      style={{
                        width: "52px",
                        height: "52px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        boxShadow: "0 0 16px rgba(255,255,255,0.04)",
                      }}
                    >
                      <i
                        className={`${project.icon} text-primary`}
                        style={{ fontSize: "1.45rem" }}
                      ></i>
                    </div>
                  </div>

                  <div className="position-relative card-body p-3">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "1.08rem",
                        lineHeight: "1.25",
                        fontWeight: 700,
                        color: "#7cc8ff",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mb-2"
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: "1.45",
                        color: "rgba(255,255,255,0.72)",
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    <p
                      className="mb-3"
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.4",
                        color: "rgba(255,255,255,0.88)",
                      }}
                    >
                      <strong>Rol:</strong> {project.role}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="badge rounded-pill"
                          style={{
                            fontSize: "0.72rem",
                            padding: "0.45rem 0.7rem",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            color: "#fff",
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                      <button
                        className="btn rounded-pill text-white"
                        style={{
                          padding: "0.45rem 0.9rem",
                          fontSize: "0.86rem",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.14)",
                        }}
                        onClick={() => setSelectedProject(project)}
                      >
                        Ver detalle
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary rounded-pill"
                          style={{
                            padding: "0.45rem 0.9rem",
                            fontSize: "0.86rem",
                          }}
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn rounded-pill"
                          style={{
                            padding: "0.45rem 0.9rem",
                            fontSize: "0.86rem",
                            background: "rgba(0,198,255,0.10)",
                            border: "1px solid rgba(0,198,255,0.24)",
                            color: "#fff",
                          }}
                        >
                          Ver proyecto
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,.78)", zIndex: 2000 }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="position-relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "700px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, rgba(0,198,255,0.15) 0%, rgba(0,114,255,0.09) 38%, rgba(0,255,163,0.07) 62%, rgba(7,16,32,0.98) 100%)",
              border: "1px solid rgba(0,198,255,0.16)",
              boxShadow:
                "0 20px 42px rgba(0,0,0,0.35), 0 0 24px rgba(0,198,255,0.10)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "3px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.55), rgba(255,255,255,0.10))",
              }}
            ></div>

            <div
              className="position-absolute rounded-circle"
              style={{
                width: "150px",
                height: "150px",
                top: "-50px",
                right: "-40px",
                background: "rgba(0,198,255,0.16)",
                filter: "blur(42px)",
                opacity: 0.9,
              }}
            ></div>

            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{
                minHeight: "110px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              }}
            >
              <span
                className="badge position-absolute top-0 end-0 rounded-pill"
                style={{
                  margin: "12px",
                  fontSize: "0.72rem",
                  padding: "0.45rem 0.75rem",
                  background: "rgba(12,18,32,0.78)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
              >
                {selectedProject.category}
              </span>

              <button
                className="btn btn-sm position-absolute top-0 start-0 rounded-circle text-white"
                style={{
                  margin: "12px",
                  width: "34px",
                  height: "34px",
                  padding: 0,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
                onClick={() => setSelectedProject(null)}
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <div
                className="d-flex align-items-center justify-content-center rounded-4"
                style={{
                  width: "58px",
                  height: "58px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <i
                  className={`${selectedProject.icon} text-primary`}
                  style={{ fontSize: "1.75rem" }}
                ></i>
              </div>
            </div>

            <div className="card-body p-3 p-md-4 position-relative">
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.25",
                  fontWeight: 700,
                  color: "#7cc8ff",
                }}
              >
                {selectedProject.title}
              </h3>

              <p
                className="mb-3"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <strong className="text-white">Resumen:</strong>{" "}
                {selectedProject.summary}
              </p>

              <p className="mb-3 text-white" style={{ fontSize: "0.92rem" }}>
                <strong>Rol:</strong> {selectedProject.role}
              </p>

              <h4 className="h6 mt-3 mb-2 text-white">Tecnologías</h4>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((item) => (
                  <span
                    key={item}
                    className="badge rounded-pill"
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.45rem 0.7rem",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h4 className="h6 mb-2 text-white">Funcionalidades</h4>
              <ul
                className="mb-4 ps-3"
                style={{
                  fontSize: "0.93rem",
                  lineHeight: "1.5",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {selectedProject.features.map((feature) => (
                  <li key={feature} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rounded-pill"
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.88rem",
                    }}
                  >
                    Ver repositorio
                  </a>
                )}

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn rounded-pill text-white"
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.88rem",
                      background: "rgba(0,198,255,0.10)",
                      border: "1px solid rgba(0,198,255,0.24)",
                    }}
                  >
                    Ver proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;