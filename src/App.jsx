import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./contact/Contact";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Sidebar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      {/* <section id="About">About</section> */}
      <section id="Contact">{/* <Contact /> */}</section>
    </div>
  );
}

export default App;
