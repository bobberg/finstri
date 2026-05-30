import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sectors from "./components/Sectors";
import Solutions from "./components/Solutions";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cloud text-ink">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Sectors />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
