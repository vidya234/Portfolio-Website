import ButtonGradient from "./assets/svg/ButtonGradient";
import Experiences from "./components/Experiences";
import Footer from "./components/footer";


import Header from "./components/Header";
import Hero from "./components/hero";
import  Projects  from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header  />
        <Hero />
        <Skills></Skills>
        <Projects />
        <Experiences></Experiences>
        <Footer></Footer>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
