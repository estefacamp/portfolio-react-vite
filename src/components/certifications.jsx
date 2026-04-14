function Certifications({ certifications }) {
  const certificationLinks = {
    "Node.js":
      "https://www.linkedin.com/feed/update/urn:li:activity:7407094779513028609/",
    React:
      "https://www.linkedin.com/feed/update/urn:li:activity:7350586645152256001/",
    Frontend:
      "https://www.linkedin.com/feed/update/urn:li:activity:7285299490230571009/",
  };

  const themeMap = {
    "Node.js": {
      bar: "linear-gradient(90deg, #20c997, #198754)",
      glow: "rgba(32, 201, 151, 0.18)",
      iconBg: "rgba(32, 201, 151, 0.14)",
      border: "rgba(32, 201, 151, 0.24)",
      icon: "bi bi-hdd-network",
    },
    React: {
      bar: "linear-gradient(90deg, #00c6ff, #0072ff)",
      glow: "rgba(0, 198, 255, 0.18)",
      iconBg: "rgba(0, 198, 255, 0.14)",
      border: "rgba(0, 198, 255, 0.24)",
      icon: "bi bi-filetype-jsx",
    },
    Frontend: {
      bar: "linear-gradient(90deg, #0dcaf0, #6f42c1)",
      glow: "rgba(13, 202, 240, 0.18)",
      iconBg: "rgba(13, 202, 240, 0.14)",
      border: "rgba(13, 202, 240, 0.24)",
      icon: "bi bi-window",
    },
    default: {
      bar: "linear-gradient(90deg, #6c757d, #495057)",
      glow: "rgba(255,255,255,0.08)",
      iconBg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.12)",
      icon: "bi bi-patch-check",
    },
  };

  return (
    <section id="certifications" className="section-block">
      <div className="container-custom">
        <div className="section-title reveal text-center">
          <span>Certificaciones</span>
          <h2>Formación y credenciales</h2>
          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "760px",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Formación complementaria y certificaciones que acompañan mi perfil
            técnico y mi crecimiento profesional.
          </p>
        </div>

        <div className="row g-4 mt-1">
          {certifications.map((cert, index) => {
            const link = cert.credentialUrl || certificationLinks[cert.title];
            const theme = themeMap[cert.title] || themeMap.default;

            return (
              <div
                className="col-12 col-md-6 col-lg-4 reveal"
                key={`${cert.title}-${index}`}
              >
                <div
                  className="card border-0 text-white h-100 overflow-hidden rounded-4 position-relative"
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

                  <div className="card-body p-4 position-relative d-flex flex-column">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-4 flex-shrink-0"
                        style={{
                          width: "56px",
                          height: "56px",
                          background: theme.iconBg,
                          border: `1px solid ${theme.border}`,
                          boxShadow: `0 0 16px ${theme.glow}`,
                        }}
                      >
                        <i className={`${theme.icon} fs-4`}></i>
                      </div>

                      <div>
                        <h3 className="h5 mb-1">{cert.title}</h3>
                        <p
                          className="mb-1"
                          style={{ color: "rgba(255,255,255,0.72)" }}
                        >
                          {cert.issuer}
                        </p>
                        <span
                          className="badge rounded-pill"
                          style={{
                            background: theme.iconBg,
                            border: `1px solid ${theme.border}`,
                            color: "#fff",
                            padding: "8px 12px",
                            fontWeight: 500,
                          }}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto pt-3">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn w-100 text-white"
                          style={{
                            borderRadius: "14px",
                            border: `1px solid ${theme.border}`,
                            background: theme.iconBg,
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                          }}
                        >
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                          Ver certificado
                        </a>
                      ) : (
                        <button
                          className="btn w-100"
                          disabled
                          style={{
                            borderRadius: "14px",
                            border: "1px solid rgba(255,255,255,0.10)",
                            background: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.55)",
                          }}
                        >
                          Próximamente
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;