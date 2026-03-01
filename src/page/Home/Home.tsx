import style from "./Home.module.scss"; 
import  Hero from "../../sections/Hero/Hero";
import  Services from "../../sections/Services/Services";
import  Projects from "../../sections/Projects/Projects";
import  Process  from "../../sections/Process/Process";
import Pricing from "../../sections/Pricing/Pricing";
import  ContactCTA from "../../sections/ContactCTA/ContactCTA";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
       <Projects />
      <Process />
      <Pricing />
      <ContactCTA />
    </>
  );
};
export default Home;