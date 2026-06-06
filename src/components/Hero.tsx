import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileText,
  Layers3,
  TrendingUp,
} from "lucide-react";
import Button from "./ui/Button";

const heroInsights = [
  {
    icon: TrendingUp,
    label: "Opbouw en uitkering",
    value: "Dynamische pensioenprojectie",
  },
  {
    icon: Layers3,
    label: "Pijlers gedekt",
    value: "AOW, werkgever, pijler 3, box 3",
  },
  {
    icon: Bot,
    label: "AI advies",
    value: "Conceptadvies direct beschikbaar",
  },
  {
    icon: FileText,
    label: "Rapportage",
    value: "Klaar voor klantgesprek",
  },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40"
    >
      <div
        className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ocean/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Pensioentools die inzicht omzetten in actie.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Finstri ontwikkelt technologie voor organisaties die complexe
            berekeningen en klantdata willen vertalen naar helder
            pensioenadvies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                className="w-full sm:min-w-40"
                icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
                size="lg"
              >
                Plan een demo
              </Button>
            </a>
            <a href="#oplossingen" className="w-full sm:w-auto">
              <Button
                className="w-full sm:min-w-44"
                size="lg"
                variant="secondary"
              >
                Ontdek de mogelijkheden
              </Button>
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-3">
            {[
              "Voor banken, adviseurs en werkgevers",
              "Realtime inzicht in pensioenruimte",
              "Modulair, schaalbaar en privacy first",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-mint"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <div
            className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-ocean/15 bg-ocean/5 sm:block"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-xl rounded-lg border border-line bg-white p-3 shadow-soft-xl">
            <div className="rounded-md border border-slate-200 bg-ink p-4 text-white sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-300">
                    PensioenPlanner
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-normal sm:text-2xl">
                    Pensioenoverzicht
                  </h2>
                </div>
                <span className="rounded-md bg-mint/[0.18] px-3 py-1.5 text-xs font-bold text-mint">
                  Live model
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Netto impact", "+18,4%", "text-mint"],
                  ["Jaarruimte", "Direct", "text-white"],
                  ["Pijlers", "4/4", "text-cyan-300"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="text-xs font-medium text-slate-400">
                      {label}
                    </p>
                    <p className={`mt-2 text-2xl font-bold ${color}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-md bg-white p-4 text-ink">
                <div className="grid gap-3">
                  {heroInsights.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2.5"
                    >
                      <div>
                        <p className="text-sm font-bold">{label}</p>
                        <p className="mt-1 text-xs text-slate-500">{value}</p>
                      </div>
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-mint"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative -mt-10 ml-auto mr-2 max-w-sm rounded-lg border border-line bg-white p-5 shadow-soft-xl sm:mr-8">
            <p className="text-xs font-bold uppercase text-slate-500">
              Privacy first
            </p>
            <p className="mt-2 text-lg font-bold text-ink">
              Gevoelige pensioendata blijft onder controle van de gebruiker.
            </p>
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
