import React from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App(){

return(

<div>

<Navbar/>

<Home/>
<About/>
<Skills/>
<Projects/>
<Achievements/>
<Contact/>

</div>

)

}

export default App;