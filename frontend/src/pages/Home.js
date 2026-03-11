import React from "react";
import { motion } from "framer-motion";

function Home(){

return(

<section id="home" style={styles.home}>
<motion.h1
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
Hi, I'm Divya Borade 
</motion.h1>

<h2 style={styles.title}>
MERN Stack Developer | IT Project Management
</h2>

<p style={styles.description}>
Passionate about MERN Stack development and IT project management.
 I enjoy building scalable web applications and solving real-world problems through technology.
</p>

<div style={styles.buttons}>


</div>

</section>

)

}
const styles = {

home:{
height:"100vh",
background:
"linear-gradient(135deg, #5361a0, #142140, #162c51)",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
color:"white",
textAlign:"center",
position:"relative",
overflow:"hidden"
},

name:{
fontSize:"48px",
background:"linear-gradient(90deg,#22c55e,#06b6d4)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
},

title:{
marginTop:"10px",
color:"#1eb2f1"
},

description:{
maxWidth:"650px",
marginTop:"20px",
color:"#95a2ca"
},


}




export default Home;