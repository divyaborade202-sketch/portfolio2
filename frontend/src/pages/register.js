import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register(){

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name,email,password);
  }

  return(
    <div style={styles.container}>

      <h2>Register</h2>

      <form onSubmit={submitHandler} style={styles.form}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>
          Register
        </button>

      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>
  )
}

const styles={
  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"100px"
  },
  form:{
    display:"flex",
    flexDirection:"column",
    width:"250px"
  },
  input:{
    padding:"10px",
    margin:"10px 0"
  },
  button:{
    padding:"10px",
    background:"green",
    color:"white",
    border:"none"
  }
}

export default Register;