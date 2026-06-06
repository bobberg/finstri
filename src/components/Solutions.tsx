import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  Layers3,
  LockKeyhole,
  PiggyBank,
  Sparkles,
} from "lucide-react";
import Section from "./ui/Section";

const pensioenPlannerFeatures = [
  "Jaarruimte",
  "Reserveringsruimte",
  "Pensioenbeleggen",
  "Opbouwfase",
  "Uitkeringsfase",
  "AOW",
  "Werkgeverspensioen",
  "Pensioenbeleggen en -sparen",
  "Overig vermogen",
  "AI Pensioenadvies integratie",
  "Rapportages",
];

const products = [
  {
    icon: Gauge,
    title: "PensioenPlanner",
    eyebrow: "Volledig pensioenoverzicht",
    description:
      "Gegevens worden snel en automatisch doorgerekend, waardoor overzicht en inzicht direct duidelijk worden. Het product is modulair opgebouwd en past onderwerpen toe op de individuele wensen en situatie van de gebruiker.",
    detail:
      "Alle 4 de pensioenpijlers komen samen: AOW, werkgeverspensioen, lijfrente en box 3-vermogen.",
  },
  {
    icon: PiggyBank,
    title: "PensioenStarter",
    eyebrow: "Conversiegericht",
    description:
      "Laat gebruikers compact het voordeel van pensioenbeleggen zien. De tool combineert jaarruimte, opbouwfase en uitkeringsfase in een slimme journey voor app en web.",
    detail:
      "Door pensioenbeleggen direct in de flow te integreren, wordt de tool een conversiemiddel dat gebruikers helpt de stap naar pensioenopbouw te zetten.",
  },
  {
    icon: Sparkles,
    title: "SmartRuimte Checker",
    eyebrow: "Administratie automatisch op orde",
    description:
      "Neemt administratieve taken over, zoals het bijhouden van beschikbare en gebruikte jaarruimte en reserveringsruimte.",
    detail:
      "Geschikt voor financieel adviseurs, belastingadviseurs en boekhouders die tijdswinst en accuraatheid willen combineren.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Slimme technologie",
    description:
      "Een intelligente motor automatiseert document parsing, extraheert de juiste gegevens en past fiscale rekenregels toe. Zo worden ruwe documenten binnen seconden omgezet in bruikbare pensioeninzichten.",
  },
  {
    icon: Layers3,
    title: "White label",
    description:
      "White-label tooling voor banken, verzekeraars, adviseurs, planners, werkgevers en platformen die financiele begeleiding schaalbaar willen maken.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy first",
    description:
      "Gegevens worden niet opgeslagen op externe servers, maar uitsluitend in de local storage van de eigen browser. Gevoelige data verlaat het apparaat niet en blijft onder controle van de gebruiker.",
  },
  {
    icon: BarChart3,
    title: "Datagedreven",
    description:
      "Moderne analytics, modellering en up-to-date data helpen om risico, adoptie en impact gericht te verbeteren.",
  },
];

function Solutions() {
  return (
    <Section id="oplossingen" className="bg-cloud">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-ocean">Oplossingen</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
          Pensioenmodules voor inzicht, activatie en conversie.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Van volledige 360-graden pensioeninzichten tot compacte conversietools
          en administratieve ruimtechecks: Finstri maakt pensioenplanning
          modulair, schaalbaar en direct toepasbaar.
        </p>
        <p className="mt-4">
          <a
            href="https://pensionplanner.nl"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-semibold text-ocean underline-offset-4 transition hover:text-ocean/80 hover:underline"
          >
            Bekijk pensionplanner.nl
          </a>
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-line bg-white p-5 shadow-[0_18px_58px_-46px_rgba(8,17,31,0.55)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-bold text-ink">
              PensioenPlanner functionaliteiten
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Modulair toe te passen op de individuele wensen en situatie van de
              gebruiker.
            </p>
          </div>
          <div className="flex flex-1 flex-wrap gap-2 lg:justify-end">
            {pensioenPlannerFeatures.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-cloud px-2.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-mint"
                />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {products.map(({ description, detail, eyebrow, icon: Icon, title }) => (
          <article
            key={title}
            className="flex min-h-full flex-col rounded-lg border border-line bg-white p-6 shadow-[0_20px_60px_-44px_rgba(8,17,31,0.55)] transition duration-200 hover:-translate-y-1 hover:border-ocean/25"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean/10 text-ocean">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="rounded-md bg-cloud px-3 py-1 text-xs font-bold uppercase text-slate-500">
                {eyebrow}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-normal text-ink">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">{description}</p>
            <p className="mt-4 text-sm font-semibold leading-6 text-ink">
              {detail}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-line bg-white p-6 shadow-[0_24px_80px_-54px_rgba(8,17,31,0.65)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-ocean">
              Technologie
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
              Pensioen tooling die vertrouwen vertaalt naar actie.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Finstri combineert slimme technologie, productstrategie en
            financiele kennis tot tools die eenvoudig voelen, maar complexe
            berekeningen en datastromen aankunnen.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ description, icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-lg border border-line bg-cloud p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-ocean shadow-[0_16px_36px_-28px_rgba(8,17,31,0.65)]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-normal text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Solutions;
