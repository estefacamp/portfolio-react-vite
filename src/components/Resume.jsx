function Resume({ education, experience }) {
    return (
      <section id="curriculum" className="section-block">
        <div className="container-custom">
          <div className="section-title reveal">
            <span>Currículum</span>
            <h2>Educación y experiencia</h2>
          </div>
  
          <div className="timeline-grid">
            <div className="timeline-column reveal">
              <h3 className="timeline-title">Educación</h3>
              {education.map((item) => (
                <article className="timeline-card" key={item.title}>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
  
            <div className="timeline-column reveal">
              <h3 className="timeline-title">Experiencia</h3>
              {experience.map((item) => (
                <article className="timeline-card" key={item.title}>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <strong>{item.place}</strong>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;