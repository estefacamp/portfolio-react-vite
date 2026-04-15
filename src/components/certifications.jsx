function Certifications({ certifications = [] }) {
  const themeMap = {
    React: {
      icon: "bi bi-filetype-jsx",
      gradient:
        "linear-gradient(135deg, rgba(0,198,255,0.18) 0%, rgba(0,114,255,0.12) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(0,198,255,0.22)",
      glowBottom: "rgba(0,114,255,0.16)",
      border: "rgba(0,198,255,0.22)",
      buttonBg: "rgba(0,198,255,0.10)",
      buttonBorder: "rgba(0,198,255,0.28)",
    },
    "Full Stack": {
      icon: "bi bi-patch-check",
      gradient:
        "linear-gradient(135deg, rgba(90,120,255,0.16) 0%, rgba(0,198,255,0.10) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(90,120,255,0.20)",
      glowBottom: "rgba(0,198,255,0.12)",
      border: "rgba(90,120,255,0.20)",
      buttonBg: "rgba(90,120,255,0.10)",
      buttonBorder: "rgba(90,120,255,0.26)",
    },
    "Node.js": {
      icon: "bi bi-hdd-network",
      gradient:
        "linear-gradient(135deg, rgba(0,255,163,0.18) 0%, rgba(0,184,148,0.12) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(0,255,163,0.22)",
      glowBottom: "rgba(0,184,148,0.16)",
      border: "rgba(0,255,163,0.20)",
      buttonBg: "rgba(0,255,163,0.10)",
      buttonBorder: "rgba(0,255,163,0.28)",
    },
    "Inglés B1": {
      icon: "bi bi-translate",
      gradient:
        "linear-gradient(135deg, rgba(0,220,180,0.16) 0%, rgba(0,140,255,0.10) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(0,220,180,0.20)",
      glowBottom: "rgba(0,140,255,0.14)",
      border: "rgba(0,220,180,0.20)",
      buttonBg: "rgba(0,220,180,0.10)",
      buttonBorder: "rgba(0,220,180,0.26)",
    },
    Java: {
      icon: "bi bi-cup-hot",
      gradient:
        "linear-gradient(135deg, rgba(13,202,240,0.16) 0%, rgba(25,135,84,0.10) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(13,202,240,0.18)",
      glowBottom: "rgba(25,135,84,0.12)",
      border: "rgba(13,202,240,0.18)",
      buttonBg: "rgba(13,202,240,0.10)",
      buttonBorder: "rgba(13,202,240,0.24)",
    },
    "Excel intermedio": {
      icon: "bi bi-file-earmark-spreadsheet",
      gradient:
        "linear-gradient(135deg, rgba(32,201,151,0.16) 0%, rgba(0,198,255,0.10) 45%, rgba(7,16,32,0.96) 100%)",
      glowTop: "rgba(32,201,151,0.20)",
      glowBottom: "rgba(0,198,255,0.12)",
      border: "rgba(32,201,151,0.20)",
      buttonBg: "rgba(32,201,151,0.10)",
      buttonBorder: "rgba(32,201,151,0.26)",
    },
  };

  const defaultTheme = {
    icon: "bi bi-award",
    gradient:
      "linear-gradient(135deg, rgba(0,198,255,0.14) 0%, rgba(0,255,163,0.10) 45%, rgba(7,16,32,0.96) 100%)",
    glowTop: "rgba(0,198,255,0.18)",
    glowBottom: "rgba(0,255,163,0.12)",
    border: "rgba(255,255,255,0.10)",
    buttonBg: "rgba(255,255,255,0.06)",
    buttonBorder: "rgba(255,255,255,0.18)",
  };

  return (
    <section id="certifications" className="section-block">
      <div className="container-custom">
        <div className="section-title reveal">
          <span>Certificaciones</span>
          <h2>Formación y credenciales</h2>
        </div>

        <div className="row g-3">
          {certifications.map((cert, index) => {
            const theme = themeMap[cert.title] || defaultTheme;

            return (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={`${cert.title}-${index}`}
              >
                <div
                  className="glass-card reveal h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    minHeight: "210px",
                    borderRadius: "18px",
                    padding: "16px",
                    background: theme.gradient,
                    border: `1px solid ${theme.border}`,
                    boxShadow: `0 12px 28px rgba(0,0,0,0.24), 0 0 18px ${theme.glowTop}`,
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
                      width: "120px",
                      height: "120px",
                      top: "-45px",
                      right: "-35px",
                      background: theme.glowTop,
                      filter: "blur(38px)",
                      opacity: 0.85,
                    }}
                  ></div>

                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "110px",
                      height: "110px",
                      bottom: "-45px",
                      left: "-30px",
                      background: theme.glowBottom,
                      filter: "blur(40px)",
                      opacity: 0.8,
                    }}
                  ></div>

                  <div className="position-relative d-flex flex-column h-100">
                    <div className="d-flex align-items-start gap-2 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-4 flex-shrink-0"
                        style={{
                          width: "44px",
                          height: "44px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          boxShadow: "0 0 12px rgba(255,255,255,0.05)",
                        }}
                      >
                        <i className={`${theme.icon} text-white`} style={{ fontSize: "1.05rem" }}></i>
                      </div>

                      <div>
                        <h3
                          className="mb-1 text-white fw-semibold"
                          style={{
                            fontSize: "1rem",
                            lineHeight: "1.2",
                          }}
                        >
                          {cert.title}
                        </h3>

                        <p
                          className="mb-2"
                          style={{
                            color: "rgba(255,255,255,0.80)",
                            fontSize: "0.88rem",
                            lineHeight: "1.3",
                          }}
                        >
                          {cert.issuer}
                        </p>

                        <span
                          className="badge rounded-pill px-2 py-1"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "0.72rem",
                          }}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn w-100 d-flex align-items-center justify-content-center gap-2 text-white"
                          style={{
                            borderRadius: "12px",
                            padding: "9px 12px",
                            background: theme.buttonBg,
                            border: `1px solid ${theme.buttonBorder}`,
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            fontWeight: 500,
                            fontSize: "0.88rem",
                          }}
                        >
                          <i className="bi bi-box-arrow-up-right"></i>
                          Ver certificado
                        </a>
                      ) : (
                        <button
                          className="btn w-100 d-flex align-items-center justify-content-center gap-2 text-white"
                          disabled
                          style={{
                            borderRadius: "12px",
                            padding: "9px 12px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            opacity: 0.7,
                            fontSize: "0.88rem",
                          }}
                        >
                          <i className="bi bi-hourglass-split"></i>
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