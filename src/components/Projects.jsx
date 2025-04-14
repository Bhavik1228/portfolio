import React from 'react';

const projects = [
  {
    title: "Random Quote Generator",
    description: "Shows a new quote every time you click a button.",
    tech: ["HTML", "CSS", "JavaScript", "Quotes API"]
  },
  {
    title: "Weather Forecast App",
    description: "Displays weather based on user location or input.",
    tech: ["HTML", "JS", "OpenWeatherMap API"]
  },
  {
    title: "To-Do List",
    description: "Create tasks, track progress, mark as complete.",
    tech: ["React", "LocalStorage"]
  },
  // Add more projects later...
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1rem',
    background: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
};

export default Projects;
