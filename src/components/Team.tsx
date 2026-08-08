import LinkedInLogo from "../assets/linkedin";
import bobPhoto from "../../profielfotos/Bob.png";
import maurijnPhoto from "../../profielfotos/Maurijn.png";
import Section from "./ui/Section";

const founders = [
  {
    name: "Maurijn Bakker",
    role: "Mede-oprichter & Product",
    image: maurijnPhoto,
    linkedIn: "https://www.linkedin.com/in/maurijn-bakker-069b9918/",
    bio: "Maurijn combineert meer dan 15 jaar bancaire ervaring met het bouwen en laten groeien van digitale proposities. Hij gelooft in klantinzichten en data om schaalbare oplossingen te ontwikkelen die concreet bijdragen aan groei, conversie en klantvertrouwen. Zijn focus: de drempels die mensen ervaren bij pensioenbeslissingen wegnemen en hen helpen betere keuzes te maken.",
  },
  {
    name: "Bob van den Berg",
    role: "Mede-oprichter & Technologie",
    image: bobPhoto,
    linkedIn: "https://www.linkedin.com/in/bobberg90/",
    bio: "Bob is Lead Creative Technologist: een ervaren developer en technoloog met ruim 10 jaar ervaring in cloud-applicaties, AI-integraties, IT-innovaties en publieke presentaties. Hij ontwierp de volledige architectuur van Pensionplanner, van de document parser tot de privacy-first frontend. Zijn focus: technologie die complex rekenwerk onzichtbaar maakt voor de eindgebruiker.",
  },
];

function Team() {
  return (
    <Section id="over-ons" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase text-ocean">Over ons</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
          De mensen achter Pensionplanner.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Pensionplanner is gebouwd door twee oprichters die vanuit bank- en
          technologiehoek naar hetzelfde probleem keken: pensioen is voor bijna
          iedereen ondoorzichtig, terwijl de fiscale ruimte die je onbenut laat
          elk jaar definitief vervalt.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {founders.map((founder) => (
          <article
            key={founder.name}
            className="grid overflow-hidden rounded-lg border border-line bg-cloud shadow-[0_22px_70px_-48px_rgba(8,17,31,0.6)] sm:grid-cols-[220px_1fr]"
          >
            <div className="relative min-h-[280px] bg-slate-100 sm:min-h-full">
              <img
                className="h-full w-full object-cover"
                src={founder.image}
                alt={`Portret van ${founder.name}`}
              />
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <h3 className="text-2xl font-bold tracking-normal text-ink">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-ocean">
                  {founder.role}
                </p>
                <p className="mt-5 leading-7 text-slate-600">{founder.bio}</p>
              </div>
              <a
                aria-label={`LinkedIn profiel van ${founder.name}`}
                className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-24px_rgba(10,102,194,0.75)]"
                href={founder.linkedIn}
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInLogo className="h-8 w-8" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-lg border border-line bg-cloud p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-ocean">
              Waarom we dit bouwen
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-normal text-ink sm:text-3xl">
              Een financieel gezonde toekomst, actief opgebouwd.
            </h3>
          </div>
          <div className="grid gap-4 text-slate-600">
            <p className="leading-7">
              We willen mensen helpen een financieel gezonde toekomst tegemoet
              te gaan, door actief pensioen op te bouwen op een manier die past
              bij hun situatie en hun wensen.
            </p>
            <p className="leading-7">
              De hervorming van het pensioenstelsel heeft dat voor de
              Nederlandse samenleving juist ingewikkelder gemaakt. Opgebouwde
              aanspraken zijn omgezet naar persoonlijke pensioenvermogens,
              uitkeringen bewegen mee met de markt, en wat je pensioen straks
              waard is hangt af van keuzes die niemand je uitlegt.
            </p>
            <p className="leading-7">
              De jaarruimteberekening staat in de wet, maar de gegevens die je
              ervoor nodig hebt liggen verspreid over de Belastingdienst, je
              werkgever en je pensioenuitvoerder. Wij lezen die documenten uit
              en rekenen alles door in de browser van de gebruiker — inkomen,
              factor A en pensioenkapitaal verlaten het apparaat niet. Wat
              overblijft is één overzicht: wat je opbouwt, wat je mist, en wat
              een inleg fiscaal oplevert.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Team;
