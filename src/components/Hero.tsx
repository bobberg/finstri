import { ArrowRight, CheckCircle2, LockKeyhole, TrendingUp } from 'lucide-react';
import Button from './ui/Button';

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ocean/10 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_34px_-28px_rgba(8,17,31,0.65)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-mint/[0.12] text-mint">
              <LockKeyhole aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            Secure-by-design planningstechnologie
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-normal text-ink sm:text-5xl lg:text-6xl">
            De toekomst van financiele planning, gebouwd voor impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Finstri ontwikkelt slimme B2B- en B2C-tools voor financiele besluitvorming, met dynamische oplossingen zoals onze PensionPlanner als fundament.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full sm:min-w-40" icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />} size="lg">
                Boek een demo
              </Button>
            </a>
            <a href="#oplossingen" className="w-full sm:w-auto">
              <Button className="w-full sm:min-w-44" size="lg" variant="secondary">
                Bekijk oplossingen
              </Button>
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-3">
            {['Voor werkgevers en platforms', 'Datagedreven pensioeninzichten', 'Gebouwd voor schaal en compliance'].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-ocean/15 bg-ocean/5 sm:block" aria-hidden="true" />
          <div className="relative mx-auto max-w-xl rounded-lg border border-line bg-white p-3 shadow-soft-xl">
            <div className="rounded-md border border-slate-200 bg-ink p-4 text-white sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-300">PensionPlanner</p>
                  <h2 className="mt-1 text-xl font-bold tracking-normal sm:text-2xl">Scenario-overzicht</h2>
                </div>
                <span className="rounded-md bg-mint/[0.18] px-3 py-1.5 text-xs font-bold text-mint">Live model</span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ['Netto impact', '+18,4%', 'text-mint'],
                  ['Pensioenfit', '92/100', 'text-white'],
                  ['Risicobuffer', '7,2 jr', 'text-cyan-300'],
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-xs font-medium text-slate-400">{label}</p>
                    <p className={`mt-2 text-2xl font-bold ${color}`}>{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-md bg-white p-4 text-ink">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold">Planningstraject</p>
                    <p className="mt-1 text-xs text-slate-500">Dynamische cashflowprojectie</p>
                  </div>
                  <TrendingUp aria-hidden="true" className="h-5 w-5 text-mint" />
                </div>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[42, 54, 48, 64, 72, 69, 82, 76, 88, 92].map((height, index) => (
                    <div key={height + index} className="flex flex-1 flex-col justify-end rounded-t-sm bg-slate-100">
                      <span className="rounded-t-sm bg-ocean" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mt-10 ml-auto mr-2 max-w-sm rounded-lg border border-line bg-white p-5 shadow-soft-xl sm:mr-8">
            <p className="text-xs font-bold uppercase text-slate-500">Trust layer</p>
            <p className="mt-2 text-lg font-bold text-ink">Veilige dataverwerking voor gevoelige financiele keuzes.</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-4/5 rounded-full bg-mint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;