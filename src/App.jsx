import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <section>
        <Sidebar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
