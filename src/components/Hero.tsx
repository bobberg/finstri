import { ArrowRight, ShieldCheck } from "lucide-react";
import PensionPlannerLogo from "./brand/PensionPlannerLogo";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

// Illustrative figures for one example profile, not a product claim.
const exampleRows = [
  { label: "Inkomen", value: "\u20ac 65.000" },
  { label: "Factor A", value: "\u20ac 600" },
  { label: "Beschikbare ruimte", value: "\u20ac 9.987" },
  { label: "Belastingvoordeel", value: "\u20ac 3.751" },
];

const pillars = ["AOW", "Werkgever", "Lijfrente", "Vermogen"];

const proofPoints = [
  [
    "Rekenregels",
    "Getoetst aan de rekenhulp van de Belastingdienst, tot op de euro.",
  ],
  ["Belastingjaren", "2017 tot en met 2026, inclusief reserveringsruimte."],
  ["Gegevens", "Blijven in de browser van de gebruiker, niet op een server."],
];

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40"
    >
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ocean/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
        <Reveal className="min-w-0 max-w-3xl">
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl">
            Pensioentools die inzicht omzetten in actie.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-8 text-slate-600 sm:text-xl">
            Finstri ontwikkelt technologie voor organisaties die complexe
            berekeningen en klantdata willen vertalen naar helder
            pensioenadvies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:min-w-40"
              href="#contact"
              icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
              size="lg"
            >
              Plan een demo
            </Button>
            <Button
              className="w-full sm:min-w-44"
              href="#oplossingen"
              size="lg"
              variant="secondary"
            >
              Ontdek de mogelijkheden
            </Button>
          </div>

          <dl className="mt-10 grid max-w-2xl gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
            {proofPoints.map(([term, description]) => (
              <div key={term}>
                <dt className="text-sm font-bold text-ink">{term}</dt>
                <dd
                  className="mt-1 text-sm leading-6 text-slate-600"
                  data-numeric
                >
                  {description}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="relative min-w-0" index={2}>
          <figure className="relative mx-auto max-w-xl rounded-2xl bg-ink p-6 text-white shadow-soft-xl sm:p-8">
            <figcaption className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap sm:items-center sm:gap-4">
              <div className="min-w-0">
                <p className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  Van document naar totaaloverzicht
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Voorbeeldberekening, geen echte klantdata
                </p>
              </div>
              <PensionPlannerLogo
                className="h-7 w-auto max-w-full rounded bg-white px-2 py-1 sm:h-8"
                role="img"
                aria-label="PensionPlanner"
              />
            </figcaption>

            <p className="mt-7 flex items-center gap-2 text-sm text-slate-300">
              <span
                className="rounded bg-white/10 px-2 py-1 font-semibold text-white"
                data-numeric
              >
                2026
              </span>
              Inkomensverklaring 2025.pdf
            </p>

            <dl className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {exampleRows.map(({ label, value }, rowIndex) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <dt className="text-sm text-slate-300">{label}</dt>
                  <dd
                    className={`text-lg font-bold ${
                      rowIndex === exampleRows.length - 1
                        ? "text-mint"
                        : "text-white"
                    }`}
                    data-numeric
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">
              Pensioenpijlers
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-md bg-white/[0.08] px-3 py-1.5 text-sm font-semibold text-slate-200"
                >
                  {pillar}
                </li>
              ))}
            </ul>

            <p className="mt-7 flex items-start gap-2.5 text-sm leading-6 text-slate-300">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-mint"
              />
              Inkomen, factor A en pensioenkapitaal verlaten het apparaat niet.
            </p>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
