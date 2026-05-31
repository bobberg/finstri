import LinkedInLogo from "../assets/linkedin";
import FinstriMark from "./brand/FinstriMark";

function Footer() {
  return (
    <footer
      id="privacy"
      className="bg-ink px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.55fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <FinstriMark className="h-11 w-11 shrink-0 text-[#8B5CF6]" />
              <div>
                <p className="text-xl font-bold tracking-normal">Finstri</p>
                <p className="text-sm text-slate-300">Premium pensioentools.</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Modulaire pensioenplanner-technologie voor organisaties die
              inzicht, activatie en conversie schaalbaar willen maken.
            </p>
          </div>

          <nav
            aria-label="Footer navigatie"
            className="grid gap-3 text-sm lg:justify-self-end"
          >
            <p className="font-bold uppercase text-slate-400">Navigatie</p>
            <a
              className="font-semibold text-slate-200 transition hover:text-white"
              href="#oplossingen"
            >
              Oplossingen
            </a>
            <a
              className="font-semibold text-slate-200 transition hover:text-white"
              href="#voor-wie"
            >
              Voor wie
            </a>
            <a
              className="font-semibold text-slate-200 transition hover:text-white"
              href="#over-ons"
            >
              Over ons
            </a>
            <a
              className="font-semibold text-slate-200 transition hover:text-white"
              href="#contact"
            >
              Plan een demo
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Finstri. Alle rechten voorbehouden.
          </p>
          <a
            aria-label="Finstri op LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-24px_rgba(10,102,194,0.75)]"
            href="https://www.linkedin.com/company/118544324"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInLogo className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
