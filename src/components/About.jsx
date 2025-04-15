import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.content}>
        <p style={styles.text}>
          Hi! I'm <strong>Bhavik</strong>, a passionate self-taught developer on a journey to build 50 awesome projects using only free tools and resources! 🚀
        </p>
        <p style={styles.text}>
          I'm currently learning web development with React.js and exploring APIs, Firebase, and cool tools like Project IDX and GitHub. I love solving problems, building creative stuff, and sharing what I learn.
        </p>
        <p style={styles.text}>
          🔧 <strong>Tools I use:</strong> React, HTML, CSS, JavaScript, Firebase, GitHub, Canva, Figma (free), and more!
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
  },
};

export default About;
