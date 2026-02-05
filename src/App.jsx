import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Work/Work";
import BlubBlur from "./BlubBlur";

import About from "./Components/About/About";

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
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
