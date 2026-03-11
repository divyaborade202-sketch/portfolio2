import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post("http://localhost:5000/api/contact", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      alert("Error sending message");

    }
  };

  return (

    <div style={styles.page}>

      <div style={styles.card}>

        <h2 style={styles.heading}>Contact Me</h2>

        <p style={styles.subtext}>
          Feel free to reach out for collaborations or opportunities.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>

        </form>

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
    padding: "40px"
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center"
  },

  heading: {
    marginBottom: "10px"
  },

  subtext: {
    color: "#555",
    marginBottom: "25px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "15px"
  },

  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "15px"
  },

  button: {
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  }

};

export default Contact;