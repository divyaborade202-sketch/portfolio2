import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects(){

const [projects, setProjects] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/projects")
.then(res => {setProjects(res.data);
})
.catch(err => {
console.log(err);
});

},[]);

return(

<section id="projects" style={styles.section}>

<h2>Projects</h2>

<div style={styles.grid}>

{projects.map((p)=>(
<div style={styles.card} key={p._id}>

<h3>{p.title}</h3>

<p>{p.description}</p>

<a href={p.github} target="_blank" rel="noreferrer">
View Code
</a>

</div>
))}

</div>

</section>

)

}

const styles = {

section:{
padding:"80px 20px",
background:"#f4f7fb",
textAlign:"center"
},

grid:{
display:"flex",
gap:"20px",
justifyContent:"center",
flexWrap:"wrap"
},

card:{
background:"white",
padding:"20px",
width:"250px",
borderRadius:"10px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}

}

export default Projects;