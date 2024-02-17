import { ProfileCard, HeroCard } from "./components";
import "./App.css";
import { useSelector } from "react-redux";
import Popup from "./components/Popup";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";

function App() {
  const trigger = useSelector((state) => state.popup.value);

  return (
    <main className=" bg-bgDefault min-h-screen">
      <aside className=" md:w-[30%] p-4 flex flex-col gap-4 items-center md:fixed justify-center h-screen">
        <ProfileCard />
      </aside>
      <section className="md:w-[70%] md:absolute md:left-[30%] md:top-0 p-4">
        <HeroCard />
        <About />
        <Skills/>
        <WorkExperience/>
        <Projects/>
      </section>

      {/* Displaying popup with contact form */}

      {trigger && (
        <Popup trigger={trigger}>
          <ContactForm />
        </Popup>
      )}
    </main>
  );
}

export default App;
