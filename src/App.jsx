import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import "./app.scss";
import Test from "../Test";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./contact/Contact";
import Cursor from "./Components/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor/>
    <section id="homepage">
      <Navbar/>
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio">
    <Parallax type="portfolio" />
    </section>
    <section>
      <Portfolio/>
    </section>
    <section>Portfolio1</section>
    <section>Protfolio2</section>
    <section>Protfolio3</section>
    <section id="Contact">
      <Contact/>
    </section>
    {/* <Test/> */}

  </div>;
};

export default App;
