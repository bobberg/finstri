import { BarChart3, Building2, CircleDollarSign, Gauge } from "lucide-react";
import Section from "./ui/Section";

const solutions = [
  {
    icon: Gauge,
    title: "PensionPlanner",
    description:
      "Interactieve pensioeninzichten, scenariovergelijkingen en handelingsperspectief in een veilige gebruikerservaring.",
  },
  {
    icon: Building2,
    title: "B2B planningmodules",
    description:
      "White-label tooling voor werkgevers, adviseurs en platformen die financiele begeleiding schaalbaar willen maken.",
  },
  {
    icon: CircleDollarSign,
    title: "B2C besluitvorming",
    description:
      "Heldere persoonlijke planning voor consumenten, met begrijpelijke stappen van inzicht naar actie.",
  },
  {
    icon: BarChart3,
    title: "Datagedreven sturing",
    description:
      "Moderne analytics en signalen die teams helpen om risico, adoptie en impact gericht te verbeteren.",
  },
];

function Solutions() {
  return (
    <Section id="oplossingen" className="bg-cloud">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-ocean">Oplossingen</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
            Financiele tooling die vertrouwen vertaalt naar actie.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
          Finstri combineert productstrategie, engineering en financiele
          domeinkennis tot tools die eenvoudig voelen, maar complexe
          berekeningen en datastromen aankunnen.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map(({ description, icon: Icon, title }) => (
          <article
            key={title}
            className="rounded-lg border border-line bg-white p-6 shadow-[0_20px_60px_-44px_rgba(8,17,31,0.55)] transition duration-200 hover:-translate-y-1 hover:border-ocean/25"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean/10 text-ocean">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-lg font-bold tracking-normal text-ink">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Solutions;
