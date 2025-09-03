import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <main className="main-content">
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
