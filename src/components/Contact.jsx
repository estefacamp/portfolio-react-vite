import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({ profile }) {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [sending, setSending] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarMensaje = (texto, tipo = "info") => {
    setMensajeEstado(texto);
    setTipoMensaje(tipo);

    setTimeout(() => {
      setMensajeEstado("");
      setTipoMensaje("");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
      mostrarMensaje("⚠️ Completá todos los campos.", "error");
      return;
    }

    try {
      setSending(true);
      setMensajeEstado("");
      setTipoMensaje("");

      await emailjs.sendForm(
        "service_l7mbjej",
        "template_hs16bxp",
        formRef.current,
        {
          publicKey: "VTKNClom_-jpOknO3",
        }
      );

      setForm({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });

      mostrarMensaje("✨ Mensaje enviado con éxito.", "success");
    } catch (error) {
      console.error("ERROR EMAILJS:", error);
      mostrarMensaje(
        `❌ Hubo un error al enviar el mensaje: ${
          error?.text || error?.message || "Error desconocido"
        }`,
        "error"
      );
    } finally {
      setSending(false);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Estefanía, vi tu portfolio y quiero contactarte."
    );
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, "_blank");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      mostrarMensaje("📋 Mail copiado correctamente.", "info");
    } catch (error) {
      console.error(error);
      mostrarMensaje("❌ No se pudo copiar el mail.", "error");
    }
  };

  const estilosMensaje = {
    marginTop: "16px",
    padding: "12px 14px",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "600",
    lineHeight: "1.4",
    background:
      tipoMensaje === "success"
        ? "rgba(34, 197, 94, 0.12)"
        : tipoMensaje === "error"
        ? "rgba(239, 68, 68, 0.12)"
        : "rgba(59, 130, 246, 0.12)",
    color:
      tipoMensaje === "success"
        ? "#86efac"
        : tipoMensaje === "error"
        ? "#fca5a5"
        : "#93c5fd",
    border:
      tipoMensaje === "success"
        ? "1px solid rgba(34, 197, 94, 0.35)"
        : tipoMensaje === "error"
        ? "1px solid rgba(239, 68, 68, 0.35)"
        : "1px solid rgba(59, 130, 246, 0.35)",
  };

  return (
    <section id="contacto" className="section-block">
      <div className="container-custom">
        <div className="section-title reveal">
          <span>Contacto</span>
          <h2>Trabajemos juntos</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card glass-card reveal position-relative overflow-hidden">
            <div className="contact-top-line"></div>
            <div className="contact-glow contact-glow-right"></div>

            <div className="position-relative">
              <h3 className="contact-card-title">Información</h3>

              <p className="contact-description">
                Estoy abierta a propuestas para roles junior, trainee y proyectos
                freelance relacionados con desarrollo frontend, React y
                soluciones web.
              </p>

              <ul className="contact-info-list">
                <li>
                  <span className="contact-icon-wrap">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <span>{profile.location}</span>
                </li>

                <li>
                  <span className="contact-icon-wrap">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <span>{profile.email}</span>
                </li>

                <li>
                  <span className="contact-icon-wrap">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <span>{profile.phone}</span>
                </li>

                <li>
                  <span className="contact-icon-wrap">
                    <i className="bi bi-linkedin"></i>
                  </span>
                  <span>linkedin.com/in/estefaniacampisi</span>
                </li>

                <li>
                  <span className="contact-icon-wrap">
                    <i className="bi bi-github"></i>
                  </span>
                  <span>github.com/estefacamp</span>
                </li>
              </ul>

              <div className="contact-actions">
                <button
                  type="button"
                  className="btn-primary-custom contact-btn-primary"
                  onClick={openWhatsApp}
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </button>

                <button
                  type="button"
                  className="btn-secondary-custom contact-btn-secondary"
                  onClick={handleCopyEmail}
                >
                  <i className="bi bi-copy me-2"></i>
                  Copiar mail
                </button>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact-form-card glass-card reveal position-relative overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="contact-top-line"></div>
            <div className="contact-glow contact-glow-left"></div>

            <div className="position-relative">
              <h3 className="contact-card-title">Enviame un mensaje</h3>

              <div className="form-grid">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="contact-input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-input"
                />

                <input
                  type="text"
                  name="asunto"
                  placeholder="Asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  className="contact-input full"
                />

                <textarea
                  name="mensaje"
                  rows="6"
                  placeholder="Contame sobre tu proyecto..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className="contact-input contact-textarea full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary-custom contact-btn-primary mt-3"
                disabled={sending}
              >
                <i className="bi bi-send me-2"></i>
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>

              {mensajeEstado && <div style={estilosMensaje}>{mensajeEstado}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;