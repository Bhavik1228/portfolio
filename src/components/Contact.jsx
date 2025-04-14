import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>
        Have a project idea, collaboration request, or just want to say hi?  
        I'm always open to connecting with like-minded people!
      </p>

      <div style={styles.links}>
        <p><strong>Email:</strong> bhavikboyapati.dev@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/bhavikboyapati" target="_blank" rel="noopener noreferrer">github.com/bhavikboyapati</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bhavikboyapati" target="_blank" rel="noopener noreferrer">linkedin.com/in/bhavikboyapati</a></p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#333',
  },
  links: {
    fontSize: '1rem',
    lineHeight: '1.8',
  },
};

export default Contact;
