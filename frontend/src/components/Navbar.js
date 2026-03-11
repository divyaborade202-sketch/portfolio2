import React from "react";

function Navbar(){

return(

<div style={styles.navbar}>

<h2 style={styles.logo}>Portfolio</h2>

<div style={styles.links}>

<a href="#home" style={styles.link}>Home</a>
<a href="#about" style={styles.link}>About</a>
<a href="#skills" style={styles.link}>Skills</a>
<a href="#projects" style={styles.link}>Projects</a>
<a href="#contact" style={styles.link}>Contact</a>

</div>

</div>

)

}

const styles = {

navbar:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"10px 40px",
background:"#020617",
position:"sticky",
top:"0"
},

logo:{
color:"white",      // portfolio name color
fontSize:"22px",
fontWeight:"bold"
},

links:{
display:"flex",
gap:"25px"
},

link:{
color:"#38bdf8",
textDecoration:"none",
fontSize:"16px"
}

}

export default Navbar;