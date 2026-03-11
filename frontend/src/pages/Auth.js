import React, { useState } from "react";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if(isLogin){
      console.log("Login:", email, password);
    } else {
      console.log("Register:", name, email, password);
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h2 style={styles.title}>
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={submitHandler} style={styles.form}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              style={styles.input}
            />
          )}

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
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p style={styles.switchText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            style={styles.switchBtn}
            onClick={()=>setIsLogin(!isLogin)}
          >
            {isLogin ? " Register" : " Login"}
          </span>

        </p>

      </div>

    </div>
  );
}

const styles = {

  container:{
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(135deg,#667eea,#764ba2)"
  },

  card:{
    background:"white",
    padding:"40px",
    borderRadius:"10px",
    width:"320px",
    boxShadow:"0 10px 25px rgba(0,0,0,0.2)",
    textAlign:"center"
  },

  title:{
    marginBottom:"20px"
  },

  form:{
    display:"flex",
    flexDirection:"column"
  },

  input:{
    padding:"12px",
    marginBottom:"15px",
    border:"1px solid #ccc",
    borderRadius:"5px",
    fontSize:"14px"
  },

  button:{
    padding:"12px",
    border:"none",
    borderRadius:"5px",
    background:"#667eea",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  },

  switchText:{
    marginTop:"15px",
    fontSize:"14px"
  },

  switchBtn:{
    color:"#667eea",
    cursor:"pointer",
    fontWeight:"bold"
  }

};

export default Auth;