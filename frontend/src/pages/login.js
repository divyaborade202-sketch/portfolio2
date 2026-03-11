import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>

      <h2 style={styles.title}>Login</h2>

      <form onSubmit={submitHandler} style={styles.form}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>

      <p style={{marginTop:"10px"}}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

    </div>
  );
}

const styles = {

  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    height:"100vh",
    background:"#f4f6f8"
  },

  title:{
    marginBottom:"20px"
  },

  form:{
    display:"flex",
    flexDirection:"column",
    width:"280px",
    background:"white",
    padding:"30px",
    borderRadius:"8px",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },

  input:{
    padding:"10px",
    marginBottom:"15px",
    border:"1px solid #ccc",
    borderRadius:"4px"
  },

  button:{
    padding:"10px",
    background:"#007bff",
    color:"white",
    border:"none",
    borderRadius:"4px",
    cursor:"pointer"
  }

};

export default Login;