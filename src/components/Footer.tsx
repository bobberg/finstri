import LinkedInLogo from "../assets/linkedin";
import PensionPlannerLogo from "./brand/PensionPlannerLogo";
import PensionPlannerMark from "./brand/PensionPlannerMark";

function Footer() {
  return (
    <footer
      id="privacy"
      className="bg-ink px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.45fr_0.6fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <PensionPlannerMark className="h-11 w-11 shrink-0 rounded-md" />
              <div>
                <p className="text-xl font-bold tracking-normal">Finstri</p>
                <p className="text-sm text-slate-300">
                  Pensionplanner is een product van Finstri.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Modulaire pensioenplanner-technologie voor organisaties die
              inzicht, activatie en conversie schaalbaar willen maken.
            </p>
            <a
              href="https://pensionplanner.nl"
              target="_blank"
              rel="noreferrer"
              aria-label="Bezoek PensionPlanner.nl"
              className="mt-5 inline-flex rounded-md bg-white px-3 py-2 transition hover:-translate-y-0.5"
            >
              <PensionPlannerLogo
                className="h-6 w-auto"
                role="img"
                aria-label="PensionPlanner"
              />
            </a>
          </div>

          <nav
            aria-label="Footer navigatie"
            className="grid content-start gap-3 text-sm"
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

          <div className="text-sm">
            <p className="font-bold uppercase text-slate-400">
              Bedrijfsgegevens
            </p>
            <address className="mt-3 not-italic leading-6 text-slate-300">
              Willem de Zwijgerlaan 110-2
              <br />
              1056 JV Amsterdam
              <br />
              <a
                className="font-semibold text-slate-200 transition hover:text-white"
                href="mailto:info@finstri.nl"
              >
                info@finstri.nl
              </a>
            </address>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 leading-6 text-slate-300">
              <dt className="text-slate-400">KvK</dt>
              <dd>82491224</dd>
              <dt className="text-slate-400">Btw-nummer</dt>
              <dd>NL003691791B43</dd>
              <dt className="text-slate-400">IBAN</dt>
              <dd>NL91KNAB0406340773</dd>
            </dl>
          </div>
        </div>

        <p className="border-b border-white/10 py-8 text-xs leading-6 text-slate-400">
          Finstri B.V. is in oprichting. Tot de oprichting wordt Pensionplanner
          aangeboden vanuit de bestaande onderneming van mede-oprichter Maurijn
          Bakker; het genoemde KvK- en btw-nummer horen bij die onderneming en
          wijzigen zodra de B.V. is opgericht. Pensionplanner is ontwikkeld door
          mede-oprichter Bob van den Berg. De oprichters dragen hun rechten op
          het platform bij oprichting over aan Finstri B.V.
        </p>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © 2026 Finstri (in oprichting). Alle rechten voorbehouden.
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
