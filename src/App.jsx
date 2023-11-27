import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

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
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
}

export default App;
