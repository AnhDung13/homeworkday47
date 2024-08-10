import Clients from "./components/Clients";
import Clients2 from "./components/Clients2";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Clients/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Feedback/>
      <Clients2/>
    </>
  )
}