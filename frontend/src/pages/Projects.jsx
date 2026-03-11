import React from "react";

function Projects() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Projects</h1>
        <p style={styles.text}>Projects are coming soon.</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif"
  },

  container: {
    textAlign: "center"
  },

  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },

  text: {
    fontSize: "18px",
    color: "#555"
  }
};

export default Projects;