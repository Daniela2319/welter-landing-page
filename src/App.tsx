import { About } from "./components/About";
import WhatsAppButton from "./components/button/WhastAppButton";
import { ContactCTA } from "./components/Contato";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
