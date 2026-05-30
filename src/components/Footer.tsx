import { ShieldCheck } from 'lucide-react';

function Footer() {
  return (
    <footer id="privacy" className="border-t border-line bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-bold tracking-normal text-ink">Finstri</p>
            <p className="text-sm text-slate-500">Premium financiele planningstools voor B2B en B2C.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
          <a className="transition hover:text-ink" href="#oplossingen">Oplossingen</a>
          <a className="transition hover:text-ink" href="#sectoren">Sectoren</a>
          <a className="transition hover:text-ink" href="#over-ons">Over ons</a>
          <a className="transition hover:text-ink" href="#contact">Boek een demo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;