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
import Section from "./ui/Section";

const products = [
  {
    icon: Gauge,
    title: "Pensioen Planner",
    eyebrow: "Volledig pensioenoverzicht",
    description:
      "In deze uitgebreide en overzichtelijke tool geven we inzicht in hoeveel pensioen je aan het opbouwen bent, wat je nu al hebt opgebouwd, welke acties je zelf kunt ondernemen en wat dit betekent als je met pensioen gaat. Automatisch en makkelijk te begrijpen. We laten zien hoe je slim gebruikmaakt van je jaarruimte en reserveringsruimte voor fiscaal voordeel, en welke aanbieders van aanvullend pensioen het beste bij jouw situatie passen.",
    detail:
      "Alle 4 de pensioenpijlers brengen we samen: AOW, werkgeverspensioen, aanvullend pensioen en eigen vermogen. En we berekenen hoe je optimaal belastingvoordeel geniet.",
  },
  {
    icon: PiggyBank,
    title: "Pensioenbeleggen",
    eyebrow: "De stap naar pensioenbeleggen",
    description:
      "Hiermee laten we het voordeel van pensioenbeleggen zien. We berekenen nauwkeurig de beschikbare jaarruimte, reserveringsruimte en welke aanbieder van pensioenbeleggen het beste past. Het slimme rekenmodel zorgt ervoor dat je precies weet waar je aan toe bent, zodat je de goede keuzes voor later kunt maken.",
    detail:
      "In een aantal eenvoudige stappen wordt de gebruiker meegenomen naar precies inzicht in de mogelijkheden van pensioenbeleggen en wat dat op termijn oplevert.",
  },
  {
    icon: Sparkles,
    title: "Jaarruimte en Reserveringsruimte",
    eyebrow: "Administratie automatisch op orde",
    description:
      "Beleg of spaar je al voor je pensioen? Dan geeft deze tool overzicht van de jaarruimtes die al zijn gebruikt, welke reserveringsruimte er nog over is en wat de jaarruimte van dit jaar is. Zo weet je precies hoeveel er nog bijgestort kan worden, met meteen een handig overzicht voor de belastingaangifte.",
    detail:
      "Het model berekent automatisch de jaarruimtes van de afgelopen 10 jaar en de resterende reserveringsruimte, met advies over de maximale inleg binnen de fiscale grenzen.",
  },
];

const features = [
  {
    icon: Calculator,
    title: "Jaarruimte",
    description:
      "Geen ingewikkelde belastingaangiftes meer doorspitten. Onze tool berekent de jaarruimte van je klant volledig automatisch. Binnen een paar seconden is duidelijk hoeveel geld er dit jaar met belastingvoordeel opzij gezet kan worden.",
  },
  {
    icon: RotateCcw,
    title: "Reserveringsruimte",
    description:
      "Onbenut belastingvoordeel uit het verleden laat je niet liggen. De tool rekent automatisch tot 10 jaar terug. Zo verander je oude cijfers in een paar klikken in extra geld voor later, met meteen een handig overzicht voor de belastingaangifte.",
  },
  {
    icon: LineChart,
    title: "Pensioenbeleggen",
    description:
      "Laat je klanten zien wat hun geld echt kan doen. De tool laat supersnel zien wat pensioenbeleggen kan opleveren ten opzichte van normaal beleggen en sparen. Zo wordt de stap naar beleggen voor later heel logisch en aantrekkelijk.",
  },
  {
    icon: Gauge,
    title: "Opbouwfase pensioen",
    description:
      "Bouwt je klant genoeg op voor later? Onze tool checkt het huidige tempo en laat direct zien of er een pensioengat dreigt. Zo weet je klant precies welke actie er nu nodig is om het doel te halen.",
  },
  {
    icon: Banknote,
    title: "Uitkeringsfase pensioen",
    description:
      "Als het pensioen ingaat, wil je klant weten waar hij aan toe is. De tool berekent hoe de opgebouwde pot slim en fiscaal gunstig wordt omgezet in een stabiel maandelijks inkomen, en wat een lijfrente-uitkering betekent voor de portemonnee.",
  },
  {
    icon: Landmark,
    title: "AOW",
    description:
      "Een compleet overzicht kan niet zonder de AOW. Onze tool rekent de actuele AOW-leeftijd en -bedragen automatisch mee. De klant ziet meteen vanaf welke dag het geld van de overheid ingaat en wat er nog mist.",
  },
  {
    icon: Building2,
    title: "Werkgeverspensioen",
    description:
      "Wat heeft je klant al opgebouwd bij huidige of vorige werkgevers? De tool haalt deze cijfers moeiteloos op en telt ze mee in het overzicht. Zo krijgt je klant in een keer grip op het totale plaatje.",
  },
  {
    icon: Wallet,
    title: "Overig vermogen",
    description:
      "Pensioen is meer dan alleen je pensioenpot. Of het nu gaat om spaargeld of beleggingen: onze tool neemt al het eigen vermogen mee voor een compleet toekomstbeeld.",
  },
  {
    icon: BrainCircuit,
    title: "AI Pensioenadvies",
    description:
      "Versnel je werk met onze ingebouwde AI-assistent. De tool bekijkt alle cijfers vlijmscherp en geeft direct slimme, persoonlijke suggesties. Dat scheelt denkwerk en helpt je de klant nog sneller te adviseren.",
  },
  {
    icon: FileText,
    title: "Overzichtelijk rapport",
    description:
      "Zet berekeningen direct om in actie. Met een klik download je een helder, visueel pensioenrapport. Ideaal voor de klant om thuis rustig na te lezen, of voor jou om te gebruiken tijdens een gesprek.",
  },
  {
    icon: Palette,
    title: "Alles in jouw huisstijl",
    description:
      "Onze software, maar dan met jouw uitstraling. Van logo's tot kleuren, lettertypes en zelfs taal: voor de klant voelt het alsof de tool en de rapporten helemaal door jou zijn gemaakt.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    description:
      "Onze tool bewaart geen gevoelige gegevens op een centrale server, maar gebruikt de veilige opslag van de computer van de gebruiker zelf (local storage). Zo voldoen we aan de strengste privacyregels en is de data altijd veilig.",
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
          Van een volledig pensioenoverzicht tot pensioenbeleggen en het
          automatisch bijhouden van jaarruimte en reserveringsruimte: Finstri
          maakt pensioenplanning modulair, schaalbaar en direct toepasbaar.
        </p>
        <div className="mt-5">
          <a
            href="https://pensionplanner.nl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bezoek PensionPlanner.nl"
            className="inline-flex items-center rounded-md border border-line bg-white px-3 py-2 shadow-[0_14px_40px_-32px_rgba(8,17,31,0.75)] transition hover:-translate-y-0.5 hover:border-ocean/35"
          >
            <PensionPlannerLogo
              className="h-6 w-auto"
              role="img"
              aria-label="PensionPlanner"
            />
          </a>
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
              <span className="rounded-md bg-cloud px-3 py-1 text-xs font-bold uppercase text-slate-600">
                {eyebrow}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-normal text-ink">
              {title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">{description}</p>
            <p className="mt-auto pt-4 text-sm font-semibold leading-6 text-ink">
              {detail}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16" id="functies">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-ocean">Functies</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
            Alles wat je nodig hebt voor een compleet pensioenverhaal.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Modulair toe te passen op de individuele wensen en situatie van de
            gebruiker.
          </p>
          <PensionPlannerLogo
            className="mt-5 h-5 w-auto"
            role="img"
            aria-label="PensionPlanner"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ description, icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-lg border border-line bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-ocean/25"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ocean/10 text-ocean">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-normal text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
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
