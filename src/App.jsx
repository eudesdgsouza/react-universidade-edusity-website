import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="O que oferecemos" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Fotos do campus" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="O que os alunos falam" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Entre em contato" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
