import { useState } from "react";

function Contact({ profile }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
      alert("Completá todos los campos.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio | ${form.asunto}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
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
      alert("Mail copiado");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contacto" className="section-block">
      <div className="container-custom">
        <div className="section-title reveal">
          <span>Contacto</span>
          <h2>Trabajemos juntos</h2>
        </div>

        <div className="contact-grid">
          <div className="glass-card reveal">
            <h3>Información</h3>
            <ul className="contact-info">
              <li>
                <i className="bi bi-geo-alt"></i>
                {profile.location}
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                {profile.email}
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                {profile.phone}
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
                linkedin.com/in/estefaniacampisi
              </li>
              <li>
                <i className="bi bi-github"></i>
                github.com/estefacamp
              </li>
            </ul>

            <div className="contact-actions">
              <button className="btn-primary-custom" onClick={openWhatsApp}>
                WhatsApp
              </button>
              <button className="btn-secondary-custom" onClick={handleCopyEmail}>
                Copiar mail
              </button>
            </div>
          </div>

          <form className="glass-card reveal" onSubmit={handleSubmit}>
            <h3>Enviame un mensaje</h3>

            <div className="form-grid">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={form.asunto}
                onChange={handleChange}
                className="full"
              />
              <textarea
                name="mensaje"
                rows="6"
                placeholder="Contame sobre tu proyecto..."
                value={form.mensaje}
                onChange={handleChange}
                className="full"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary-custom">
              Enviar por mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;