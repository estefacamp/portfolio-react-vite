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
        <section id="portfolio" className="py-5">
          <div className="container">
            <div className="text-center mb-4">
              <span className="text-primary text-uppercase fw-semibold small">
                Portfolio
              </span>
              <h2 className="fw-bold mt-2">Proyectos destacados</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: "760px" }}>
                Selección de proyectos desarrollados para fortalecer mi perfil en
                desarrollo web, organización de interfaces y resolución de
                problemas reales.
              </p>
            </div>
  
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn ${
                    projectFilter === category
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } rounded-pill`}
                  onClick={() => setProjectFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
  
            <div className="row g-4 justify-content-center">
              {filteredProjects.map((project) => (
                <div className="col-12 col-md-10 col-lg-8" key={project.id}>
                  <div className="card h-100 border-0 shadow rounded-4 overflow-hidden bg-dark text-light">
                    <div
                      className="position-relative d-flex align-items-center justify-content-center"
                      style={{
                        minHeight: "110px",
                        background:
                          "linear-gradient(135deg, rgba(110,168,254,.18), rgba(124,247,199,.10))",
                      }}
                    >
                      <span className="badge text-bg-dark position-absolute top-0 end-0 m-3 rounded-pill">
                        {project.category}
                      </span>
                      <i className={`${project.icon} fs-2 text-primary`}></i>
                    </div>
  
                    <div className="card-body p-4">
                      <h3 className="fw-bold mb-3">{project.title}</h3>
  
                      <p className="text-secondary mb-3">
                        {project.shortDescription}
                      </p>
  
                      <p className="mb-3">
                        <strong>Rol:</strong> {project.role}
                      </p>
  
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="badge rounded-pill text-bg-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
  
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-outline-light rounded-pill"
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
                          >
                            GitHub
                          </a>
                        )}
  
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary rounded-pill"
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
            style={{ backgroundColor: "rgba(0,0,0,.75)", zIndex: 2000 }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden bg-dark text-light"
              style={{ width: "100%", maxWidth: "820px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                  minHeight: "150px",
                  background:
                    "linear-gradient(135deg, rgba(110,168,254,.18), rgba(124,247,199,.10))",
                }}
              >
                <span className="badge text-bg-dark position-absolute top-0 end-0 m-3 rounded-pill">
                  {selectedProject.category}
                </span>
  
                <button
                  className="btn btn-outline-light btn-sm position-absolute top-0 start-0 m-3 rounded-circle"
                  onClick={() => setSelectedProject(null)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
  
                <i className={`${selectedProject.icon} fs-1 text-primary`}></i>
              </div>
  
              <div className="card-body p-4">
                <h3 className="fw-bold mb-3">{selectedProject.title}</h3>
  
                <p className="text-secondary">
                  <strong className="text-light">Resumen:</strong>{" "}
                  {selectedProject.summary}
                </p>
  
                <p>
                  <strong>Rol:</strong> {selectedProject.role}
                </p>
  
                <h4 className="h5 mt-4 mb-3">Tecnologías</h4>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((item) => (
                    <span
                      key={item}
                      className="badge rounded-pill text-bg-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
  
                <h4 className="h5 mb-3">Funcionalidades</h4>
                <ul className="text-secondary mb-4">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
  
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary rounded-pill"
                    >
                      Ver repositorio
                    </a>
                  )}
  
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary rounded-pill"
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