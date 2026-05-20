import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function Portfolio() {
  return (
    <div className="bg-obsidian text-white min-h-screen relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            color: "#fafafa",
            border: "1px solid rgba(229,254,64,0.4)",
            borderRadius: 0,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
