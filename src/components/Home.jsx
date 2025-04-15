import React from 'react';

const Home = () => {
  return (
    <section id="home" style={styles.section}>
      <h2 style={styles.name}>Hey, I'm Bhavik</h2>
      <p style={styles.tagline}>Aspiring Developer | Building 50 Projects Using Free Tools 🚀</p>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '60vh',
  },
  name: {
    fontSize: '2.5rem',
    margin: '1rem 0',
  },
  tagline: {
    fontSize: '1.25rem',
    color: '#555',
  },
};

export default Home;
