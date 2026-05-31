import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
} from "lucide-react";
import Button from "./ui/Button";
import Section from "./ui/Section";

const audiences = [
  {
    icon: Landmark,
    title: "Financiele instellingen & distributeurs",
    items: [
      {
        label: "Banken & verzekeraars",
        text: "Verhoog conversie op pensioenproducten door klanten direct online inzicht te geven in hun pensioenmogelijkheden.",
      },
      {
        label: "Vermogensbeheerders",
        text: "Maak de overstap naar pensioenbeleggen in pijler 3 naadloos met geautomatiseerde berekeningen voor jaar- en reserveringsruimte.",
      },
      {
        label: "Vergelijkingssites",
        text: "Bied consumenten een onafhankelijke vergelijking op basis van realtime data en complete overzichten van aanbieders.",
      },
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Advies & planning",
    items: [
      {
        label: "Financieel adviseurs & planners",
        text: "Automatiseer administratie en inventarisatie. Krijg direct een 360-graden overzicht van alle pensioenpijlers, zodat je sneller en beter kunt adviseren.",
      },
    ],
  },
  {
    icon: Building2,
    title: "Werkgevers & HR-professionals",
    items: [
      {
        label: "Pensioeneducatie",
        text: "Help werknemers hun financiele toekomst te begrijpen. Onze tools vertalen ingewikkelde pensioenmaterie naar een helder dashboard, wat zorgt voor rust en goed werkgeverschap.",
      },
    ],
  },
];

function Sectors() {
  return (
    <Section id="voor-wie" className="bg-ink text-white">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-mint">Voor wie</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
            Voor wie zijn onze pensioentools?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Van complexe fiscale berekeningen tot helder werknemersinzicht: onze
            innovatieve pensioentools zijn modulair en schaalbaar ontworpen voor
            professionals die pensioen inzichtelijk en actiegericht willen
            maken.
          </p>
        </div>

        <div className="grid gap-4">
          {audiences.map(({ icon: Icon, items, title }) => (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6 transition duration-200 hover:-translate-y-1 hover:border-mint/35 hover:bg-white/[0.09]"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-ink">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-normal">{title}</h3>
                  <div className="mt-4 grid gap-4">
                    {items.map((item) => (
                      <div key={item.label}>
                        <p className="font-bold text-white">{item.label}</p>
                        <p className="mt-1 leading-7 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-white/10 bg-white p-6 text-ink shadow-soft-xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold tracking-normal">
            Klaar voor de volgende stap?
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Of je nu een API-koppeling zoekt voor een grootbank of een
            plug-and-play dashboard voor je adviespraktijk: onze tools passen
            zich aan jouw business aan.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <a href="#oplossingen" className="w-full sm:w-auto">
            <Button className="w-full sm:min-w-48" variant="secondary">
              Ontdek de mogelijkheden
            </Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button
              className="w-full sm:min-w-36"
              icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
            >
              Plan een demo
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Sectors;
