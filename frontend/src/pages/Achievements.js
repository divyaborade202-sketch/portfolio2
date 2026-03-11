import React from "react";

function Achievements(){

return(

<section id="achievements" style={styles.section}>

<h2>Achievements</h2>

<ul style={styles.list}>

<li>IT Project Management Cirtification</li>
<li>Aspire Leaders Program Graduate</li>
<li>Community base partisipatry action and reachers</li>

</ul>

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

list:{
marginTop:"20px",
lineHeight:"2"
}

}

export default Achievements;