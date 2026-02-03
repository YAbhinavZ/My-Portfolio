import "./App.css";
import Navbar from "./Componenets/NavBar/NavBar";
import Education from "./Componenets/Education/Education";
import Skills from "./Componenets/Skills/Skills";
import Footer from "./Componenets/Footer/Footer";
import Contact from "./Componenets/Contact/Contact";
import Work from "./Componenets/Work/Work";
import BlubBlur from "./BlubBlur";

import About from "./Componenets/About/About";

function App() {
  return (
    <>
      <div className="bg-black">
       <BlubBlur position={{top:'35%' , left:'20%'}} size={{height:'30%' , width: '40%'}}></BlubBlur>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative  text-white pt-16 ">
          <Navbar />
          <About />
           <Skills />
         {/* <Work />
          <Education />
          <Contact />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
