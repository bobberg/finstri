import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
} from "lucide-react";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
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
      <Reveal className="max-w-3xl">
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
          Voor wie zijn onze pensioentools?
        </h2>
        <p className="mt-5 max-w-[65ch] text-lg leading-8 text-slate-300">
          Van complexe fiscale berekeningen tot helder werknemersinzicht: onze
          pensioentools zijn modulair en schaalbaar ontworpen voor professionals
          die pensioen inzichtelijk en actiegericht willen maken.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {audiences.map(({ icon: Icon, items, title }, index) => (
          <Reveal
            as="article"
            index={index}
            key={title}
            className="rounded-2xl bg-white/[0.06] p-6 transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-white/[0.1]"
          >
            <div className="flex h-full flex-col gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-ink">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.01em]">
                  {title}
                </h3>
                <div className="mt-5 grid gap-4">
                  {items.map((item) => (
                    <div key={item.label}>
                      <p className="font-bold text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-2xl bg-white p-6 text-ink shadow-soft-xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-3xl">
          <h3 className="text-balance text-2xl font-bold tracking-[-0.02em]">
            Klaar voor de volgende stap?
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Of je nu een API-koppeling zoekt voor een grootbank of een
            plug-and-play dashboard voor je adviespraktijk: onze tools passen
            zich aan jouw business aan.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Button
            className="w-full sm:min-w-48"
            href="#oplossingen"
            variant="secondary"
          >
            Ontdek de mogelijkheden
          </Button>
          <Button
            className="w-full sm:min-w-36"
            href="#contact"
            icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
          >
            Plan een demo
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export default Sectors;
