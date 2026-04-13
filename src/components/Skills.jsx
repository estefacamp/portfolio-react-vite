function Skills({ skillGroups }) {
    return (
      <section id="skills" className="section-block">
        <div className="container-custom">
          <div className="section-title reveal">
            <span>Skills</span>
            <h2>Stack técnico y herramientas</h2>
          </div>
  
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="glass-card reveal" key={group.title}>
                <h3>{group.title}</h3>
  
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <div className="skill-head">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
  
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;