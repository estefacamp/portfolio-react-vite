import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Certifications from "./components/certifications";

import {
  aboutCards,
  categories,
  certifications,
  education,
  experience,
  languages,
  learningNow,
  profile,
  projects,
  skillGroups,
  stats,
  training,
} from "./data/Portfoliodata";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved ? saved === "dark" : true;
  });

  const [projectFilter, setProjectFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "Todos") return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero profile={profile} stats={stats} />
        <About aboutCards={aboutCards} />
        <Skills skillGroups={skillGroups} learningNow={learningNow} />
        <Resume
          education={education}
          training={training}
          experience={experience}
          languages={languages}
        />
        <Certifications certifications={certifications} />
        <Projects
          categories={categories}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          filteredProjects={filteredProjects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}

export default App;