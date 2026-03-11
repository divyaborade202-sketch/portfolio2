import React from "react";

function Skills(){

return(

<section id="skills" style={styles.section}>

<h2>Skills</h2>

<div style={styles.grid}>

<div>React</div>
<div>HTML</div>
<div>CSS</div>
<div>JavaScript</div>

<div>Node.js</div>
<div>Express.js</div>

<div>MongoDB</div>
<div>MySQL</div>
<div>Task Management</div>
<div>Team Collaboration</div>

<div>Python</div>
<div>Problem Solving</div>
<div>Agile Methodology</div>
<div>Matplotlib</div>
<div>Project Planning</div>



</div>

</section>

)

}

const styles={

section:{
padding:"80px 20px",
background:"#020617",
color:"white",
textAlign:"center"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",
gap:"20px",
maxWidth:"600px",
margin:"auto",
marginTop:"40px"
}

}

export default Skills;