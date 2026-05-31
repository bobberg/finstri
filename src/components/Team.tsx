import { Linkedin } from "lucide-react";
import bobPhoto from "../../profielfotos/Bob.png";
import maurijnPhoto from "../../profielfotos/Maurijn.png";
import Section from "./ui/Section";

const founders = [
  {
    name: "Maurijn Bakker",
    role: "Co-founder & Product",
    image: maurijnPhoto,
    linkedIn: "https://www.linkedin.com/in/maurijn-bakker-069b9918/",
    bio: "Maurijn combineert meer dan 15 jaar bancaire ervaring met het bouwen en laten groeien van digitale proposities. Hij gelooft in klantinzichten en data om schaalbare oplossingen te ontwikkelen die concreet bijdragen aan groei, conversie en klantvertrouwen. Zijn focus: de drempels die mensen ervaren bij pensioenbeslissingen wegnemen en hen helpen betere keuzes te maken.",
  },
  {
    name: "Bob van den Berg",
    role: "Co-founder & Technology",
    image: bobPhoto,
    linkedIn: "https://www.linkedin.com/in/bobberg90/",
    bio: "Bob is Lead Creative Technologist: een ervaren developer en technoloog met ruim 10 jaar ervaring in cloud-applicaties, AI-integraties, IT-innovaties en publieke presentaties. Hij ontwierp de volledige architectuur, van de document parser tot de privacy-first frontend. Zijn focus: technologie die complex rekenwerk onzichtbaar maakt voor de eindgebruiker.",
  },
];

function Team() {
  return (
    <Section id="over-ons" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase text-ocean">Over ons</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
          Een team met diepe product- en technologie-expertise.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Finstri is gebouwd vanuit de overtuiging dat pensioenplanning slimmer,
          menselijker en overtuigender kan worden gemaakt.
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
                className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-ocean/35 hover:text-ocean"
                href={founder.linkedIn}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Team;
