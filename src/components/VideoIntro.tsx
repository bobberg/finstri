import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import VideoPlayer from "./ui/VideoPlayer";

function VideoIntro() {
  return (
    <Section
      id="in-actie"
      className="bg-ink text-white"
      innerClassName="grid gap-12 lg:grid-cols-[24rem_1fr] lg:items-center lg:gap-16"
    >
      <Reveal className="min-w-0">
        <VideoPlayer
          className="mx-auto aspect-[4/5] max-w-[23rem] shadow-soft-xl lg:mx-0 lg:max-w-none"
          captions="/video/pensionplanner-intro.nl.vtt"
          label="Speel de introductievideo van Pensionplanner af"
          poster="/video/pensionplanner-intro-poster.jpg"
          src="/video/pensionplanner-intro.mp4"
        />
      </Reveal>

      <Reveal className="min-w-0" index={1}>
        <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
          Zie in een minuut wat de eindgebruiker ziet.
        </h2>
        <p className="mt-6 max-w-[62ch] text-lg leading-8 text-slate-300">
          Deze video is de consumentenkant van Pensionplanner: hoe twee
          pensioenfondsen, een oude lijfrente en de AOW binnen een minuut
          samenkomen in een netto maandbedrag. Dat is het verhaal dat jouw
          klanten te zien krijgen wanneer je de modules inzet.
        </p>
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          <div className="border-t border-white/15 pt-4">
            <dt className="font-bold">Vier pijlers, een bedrag</dt>
            <dd className="mt-1.5 leading-7 text-slate-300">
              AOW, werkgeverspensioen, lijfrente en vermogen naast elkaar, netto
              per maand.
            </dd>
          </div>
          <div className="border-t border-white/15 pt-4">
            <dt className="font-bold">Van gat naar inleg</dt>
            <dd className="mt-1.5 leading-7 text-slate-300">
              Het verschil met het huidige inkomen en de aftrekbare inleg om dat
              te dichten.
            </dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}

export default VideoIntro;
