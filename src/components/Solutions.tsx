import {
  Banknote,
  BarChart3,
  BrainCircuit,
  Building2,
  Calculator,
  FileText,
  Gauge,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  Palette,
  PiggyBank,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import PensionPlannerLogo from "./brand/PensionPlannerLogo";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

const products = [
  {
    icon: Gauge,
    title: "Pensioen Planner",
    subtitle: "Volledig pensioenoverzicht",
    description:
      "Inzicht in hoeveel pensioen iemand opbouwt, wat er al staat, welke acties nog open liggen en wat dat betekent op de pensioendatum. We laten zien hoe jaarruimte en reserveringsruimte slim worden ingezet voor fiscaal voordeel, en welke aanbieders van aanvullend pensioen bij de situatie passen.",
    detail:
      "Alle vier de pijlers in één beeld: AOW, werkgeverspensioen, aanvullend pensioen en eigen vermogen.",
  },
  {
    icon: PiggyBank,
    title: "Pensioenbeleggen",
    subtitle: "De stap naar pensioenbeleggen",
    description:
      "Het rekenmodel bepaalt de beschikbare jaarruimte, de reserveringsruimte en welke aanbieder past. In een paar begrijpelijke stappen wordt duidelijk wat pensioenbeleggen oplevert ten opzichte van sparen, en hoeveel er later te besteden is.",
    detail:
      "Ontworpen als conversiepad: van eerste berekening naar een onderbouwde keuze.",
  },
  {
    icon: Sparkles,
    title: "Jaarruimte en Reserveringsruimte",
    subtitle: "Administratie automatisch op orde",
    description:
      "Voor wie al belegt of spaart voor pensioen: welke jaarruimtes zijn gebruikt, wat is er nog over aan reserveringsruimte en hoeveel kan er dit jaar bij. Meteen een bruikbaar overzicht voor de belastingaangifte.",
    detail:
      "Automatisch over de afgelopen tien jaar, met de maximale inleg binnen de fiscale grenzen.",
  },
];

const features = [
  {
    icon: Calculator,
    title: "Jaarruimte",
    description:
      "Geen belastingaangiftes meer doorspitten. De jaarruimte wordt volledig automatisch berekend: binnen seconden is duidelijk hoeveel er dit jaar met belastingvoordeel opzij kan.",
  },
  {
    icon: RotateCcw,
    title: "Reserveringsruimte",
    description:
      "Onbenut belastingvoordeel uit het verleden blijft niet liggen. De tool rekent tot tien jaar terug en verandert oude cijfers in een paar klikken in extra geld voor later.",
  },
  {
    icon: LineChart,
    title: "Pensioenbeleggen",
    description:
      "Laat zien wat pensioenbeleggen oplevert ten opzichte van normaal beleggen en sparen. Zo wordt de stap naar beleggen voor later logisch en aantrekkelijk.",
  },
  {
    icon: Gauge,
    title: "Opbouwfase",
    description:
      "Bouwt je klant genoeg op? De tool checkt het huidige tempo en laat direct zien of er een pensioengat dreigt, en welke actie nu nodig is om het doel te halen.",
  },
  {
    icon: Banknote,
    title: "Uitkeringsfase",
    description:
      "Als het pensioen ingaat: hoe de opgebouwde pot fiscaal gunstig wordt omgezet in een stabiel maandinkomen, en wat een lijfrente-uitkering betekent voor de portemonnee.",
  },
  {
    icon: Landmark,
    title: "AOW",
    description:
      "De actuele AOW-leeftijd en -bedragen rekenen automatisch mee. Meteen zichtbaar vanaf welke dag het geld van de overheid ingaat en wat er nog mist.",
  },
  {
    icon: Building2,
    title: "Werkgeverspensioen",
    description:
      "Opbouw bij huidige en vorige werkgevers wordt moeiteloos opgehaald en meegeteld. Zo ontstaat in één keer grip op het totale plaatje.",
  },
  {
    icon: Wallet,
    title: "Overig vermogen",
    description:
      "Pensioen is meer dan de pensioenpot. Spaargeld en beleggingen tellen mee, zodat het toekomstbeeld compleet is.",
  },
  {
    icon: BrainCircuit,
    title: "AI Pensioenadvies",
    description:
      "De ingebouwde assistent leest alle cijfers en geeft direct persoonlijke suggesties. Dat scheelt denkwerk en versnelt het adviesgesprek.",
  },
  {
    icon: FileText,
    title: "Overzichtelijk rapport",
    description:
      "Met één klik een helder, visueel pensioenrapport. Om thuis rustig na te lezen, of om te gebruiken tijdens het gesprek.",
  },
  {
    icon: Palette,
    title: "Jouw huisstijl",
    description:
      "Onze software, jouw uitstraling. Van logo's tot kleuren, lettertypes en taal: voor de klant voelt het alsof je het zelf hebt gebouwd.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    description:
      "Geen gevoelige gegevens op een centrale server. De tool gebruikt de lokale opslag van de gebruiker zelf, zodat de data het apparaat niet verlaat.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Slimme technologie",
    description:
      "Een intelligente motor automatiseert document parsing, extraheert de juiste gegevens en past fiscale rekenregels toe. Ruwe documenten worden binnen seconden bruikbare pensioeninzichten.",
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
      "Gegevens worden niet opgeslagen op externe servers, maar uitsluitend in de local storage van de eigen browser. Gevoelige data verlaat het apparaat niet.",
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
      <Reveal className="max-w-3xl">
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
          Drie pensioenmodules voor inzicht, activatie en conversie.
        </h2>
        <p className="mt-5 max-w-[65ch] text-lg leading-8 text-slate-600">
          Van een volledig pensioenoverzicht tot pensioenbeleggen en het
          automatisch bijhouden van jaarruimte en reserveringsruimte. Alles
          draait op hetzelfde rekenhart achter PensionPlanner.
        </p>
        <a
          href="https://pensionplanner.nl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bezoek PensionPlanner.nl"
          className="mt-5 inline-flex items-center rounded-md bg-white px-3 py-2 shadow-[0_14px_40px_-32px_rgba(8,17,31,0.75)] transition duration-200 hover:-translate-y-0.5"
        >
          <PensionPlannerLogo
            className="h-6 w-auto"
            role="img"
            aria-label="PensionPlanner"
          />
        </a>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {products.map(
          ({ description, detail, subtitle, icon: Icon, title }, index) => (
            <Reveal
              as="article"
              index={index}
              key={title}
              className="flex min-h-full flex-col rounded-2xl bg-white p-6 shadow-[0_20px_60px_-44px_rgba(8,17,31,0.55)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(8,17,31,0.6)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean/10 text-ocean">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-ink">
                {title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-ocean">
                {subtitle}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
              <p className="mt-auto pt-5 text-sm font-semibold leading-6 text-ink">
                {detail}
              </p>
            </Reveal>
          ),
        )}
      </div>

      <div className="mt-20 scroll-mt-24" id="functies">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            Twaalf functies, modulair in te zetten.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Elke module is los af te nemen en past zich aan de situatie van de
            eindgebruiker aan.
          </p>
        </Reveal>

        <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {features.map(({ description, icon: Icon, title }, index) => (
            <Reveal
              as="div"
              index={index % 2}
              key={title}
              className="flex gap-4 border-t border-line py-6"
            >
              <Icon
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-ocean"
              />
              <div>
                <dt className="text-lg font-bold tracking-[-0.01em] text-ink">
                  {title}
                </dt>
                <dd className="mt-1.5 max-w-[52ch] text-sm leading-6 text-slate-600">
                  {description}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="mt-20 rounded-2xl bg-white p-6 shadow-[0_24px_80px_-54px_rgba(8,17,31,0.65)] sm:p-8 lg:p-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            Pensioentooling die vertrouwen vertaalt naar actie.
          </h2>
          <p className="max-w-[65ch] text-lg leading-8 text-slate-600">
            Finstri combineert slimme technologie, productstrategie en
            financiele kennis tot tools die eenvoudig voelen, maar complexe
            berekeningen en datastromen aankunnen.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ description, icon: Icon, title }, index) => (
            <Reveal
              as="article"
              index={index}
              key={title}
              className="border-t border-line pt-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cloud text-ocean">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-[-0.01em] text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Solutions;
