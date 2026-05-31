import { Linkedin } from "lucide-react";
import FinstriMark from "./brand/FinstriMark";

function Footer() {
  return (
    <footer
      id="privacy"
      className="border-t border-line bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <FinstriMark className="h-10 w-10 shrink-0 text-[#8B5CF6]" />
          <div>
            <p className="text-lg font-bold tracking-normal text-ink">
              Finstri
            </p>
            <p className="text-sm text-slate-500">Premium pensioentools.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
            <a className="transition hover:text-ink" href="#oplossingen">
              Oplossingen
            </a>
            <a className="transition hover:text-ink" href="#voor-wie">
              Voor wie
            </a>
            <a className="transition hover:text-ink" href="#over-ons">
              Over ons
            </a>
            <a className="transition hover:text-ink" href="#contact">
              Plan een demo
            </a>
            <a
              aria-label="Finstri op LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-white text-slate-600 transition hover:border-ocean/35 hover:text-ink"
              href="https://www.linkedin.com/company/118544324"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 Finstri. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
