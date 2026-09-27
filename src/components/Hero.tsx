import { ArrowRight } from "lucide-react";
import PensionPlannerLogo from "./brand/PensionPlannerLogo";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import VideoPlayer from "./ui/VideoPlayer";

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
          <figure className="mx-auto max-w-[23rem] lg:max-w-[26rem]">
            <VideoPlayer
              className="aspect-[4/5] shadow-soft-xl"
              captions="/video/pensionplanner-intro.nl.vtt"
              label="Speel de introductievideo van Pensionplanner af"
              poster="/video/pensionplanner-intro-poster.jpg"
              src="/video/pensionplanner-intro.mp4"
            />
            <figcaption className="mt-5 flex items-start gap-3 border-t border-line pt-4">
              <PensionPlannerLogo
                className="mt-0.5 h-5 w-auto shrink-0"
                role="img"
                aria-label="PensionPlanner"
              />
              <p className="text-sm leading-6 text-slate-600">
                Zie in <span data-numeric>60</span> seconden hoe Pensionplanner
                vier pensioenpijlers samenbrengt in een netto maandoverzicht.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
