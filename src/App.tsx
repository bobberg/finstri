import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Privacy from "./components/Privacy";
import Sectors from "./components/Sectors";
import Solutions from "./components/Solutions";
import Team from "./components/Team";

// The site ships as one bundle and Azure Static Web Apps rewrites unknown
// paths to index.html, so a single path check gives the privacyverklaring a
// real, linkable URL without pulling in a router.
function isPrivacyRoute() {
  if (typeof window === "undefined") return false;
  return (
    window.location.pathname.replace(/\/+$/, "").toLowerCase() === "/privacy"
  );
}

function App() {
  const showPrivacy = isPrivacyRoute();

  return (
    <div className="min-h-screen overflow-hidden bg-cloud text-ink">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        href="#main"
      >
        Ga direct naar de inhoud
      </a>
      <Header linkPrefix={showPrivacy ? "/" : ""} />
      {/* tabIndex -1 so activating the skip link actually moves keyboard focus into the content (WCAG 2.4.1). */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {showPrivacy ? (
          <Privacy />
        ) : (
          <>
            <Hero />
            <Solutions />
            <Sectors />
            <Team />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
