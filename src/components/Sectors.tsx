import { Landmark, LineChart, UsersRound } from "lucide-react";
import Section from "./ui/Section";

const sectors = [
  {
    icon: UsersRound,
    label: "Werkgevers",
    text: "Maak pensioen en financiele vitaliteit concreet voor medewerkers, met meetbare activatie en passende begeleiding.",
  },
  {
    icon: Landmark,
    label: "Adviseurs en platformen",
    text: "Integreer planningservaringen die aansluiten op adviesprocessen, distributiemodellen en compliance-eisen.",
  },
  {
    icon: LineChart,
    label: "Consumenten",
    text: "Geef gebruikers begrijpelijke inzichten in inkomen, vermogen, pensioen en keuzes voor later.",
  },
];

function Sectors() {
  return (
    <Section id="sectoren" className="bg-ink text-white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-mint">Sectoren</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
            Gebouwd voor organisaties die financieel vertrouwen willen
            opschalen.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Van enterprise distributie tot directe consumentenervaringen:
            Finstri ontwerpt planningstechnologie voor markten waar precisie,
            adoptie en veiligheid samenkomen.
          </p>
        </div>

        <div className="grid gap-4">
          {sectors.map(({ icon: Icon, label, text }) => (
            <article
              key={label}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6 transition duration-200 hover:-translate-y-1 hover:border-mint/35 hover:bg-white/[0.09]"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-ink">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-normal">{label}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Sectors;
