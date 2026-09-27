import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Reveal from "./ui/Reveal";

const lastUpdated = "27 september 2026";

type Clause = {
  title: string;
  body: string[];
  list?: string[];
};

const clauses: Clause[] = [
  {
    title: "Wie is verantwoordelijk voor je gegevens",
    body: [
      "Finstri is de verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden verwerkt. Je bereikt ons op Willem de Zwijgerlaan 110-2, 1056 JV Amsterdam of via info@finstri.nl. Ons KvK-nummer is 82491224.",
      "Deze verklaring gaat alleen over finstri.nl. Voor het product Pensionplanner geldt een eigen privacyverklaring op pensionplanner.nl.",
    ],
  },
  {
    title: "Welke gegevens we verwerken",
    body: [
      "We verzamelen alleen gegevens die je zelf achterlaat in het contactformulier. Dat zijn:",
    ],
    list: [
      "Voornaam en achternaam",
      "E-mailadres",
      "Telefoonnummer, als je dat invult",
      "Bedrijfsnaam, als je die invult",
      "Je hulpvraag en de inhoud van je bericht",
      "De bevestiging dat je akkoord gaat met deze privacyverklaring",
    ],
  },
  {
    title: "Waarvoor we die gegevens gebruiken",
    body: [
      "We gebruiken je gegevens om je aanvraag te beantwoorden, een demo in te plannen en contact met je te houden over die aanvraag. We gebruiken ze niet voor geautomatiseerde besluitvorming of profilering.",
      "De grondslag is je toestemming (artikel 6 lid 1 sub a AVG) en ons gerechtvaardigd belang om op een zakelijke vraag te kunnen reageren (artikel 6 lid 1 sub f AVG).",
    ],
  },
  {
    title: "Hoe je bericht bij ons terechtkomt",
    body: [
      "Wat je in het formulier invult, wordt door onze server omgezet in een e-mail naar onze eigen mailbox. We slaan het formulier niet op in een database en gebruiken geen CRM-koppeling.",
      "Het formulier bevat een verborgen veld dat spamrobots herkent. Dat veld verwerkt geen gegevens van je.",
    ],
  },
  {
    title: "Cookies en meten",
    body: [
      "Deze website plaatst geen cookies en gebruikt geen analytics, advertentiepixels of social media trackers. Daarom zie je ook geen cookiemelding.",
      "De introductievideo staat op onze eigen server, niet op YouTube of Vimeo. Het afspelen ervan deelt dus geen gegevens met derden.",
    ],
  },
  {
    title: "Hoe lang we gegevens bewaren",
    body: [
      "Contactaanvragen bewaren we maximaal 24 maanden na het laatste contact. Daarna verwijderen we ze. Wil je dat eerder, dan doen we dat op verzoek.",
    ],
  },
  {
    title: "Met wie we gegevens delen",
    body: [
      "We verkopen je gegevens niet en delen ze niet voor marketingdoeleinden. We werken met twee verwerkers die ons nodig zijn om de site en onze mail te laten werken:",
    ],
    list: [
      "Microsoft Azure, hosting van deze website in de regio West-Europa",
      "TransIP, onze e-maildienst in Nederland",
    ],
  },
  {
    title: "Beveiliging",
    body: [
      "Het verkeer met deze website loopt volledig over HTTPS en we dwingen dat af met HSTS. Toegang tot onze mailbox is beperkt tot de oprichters van Finstri en beveiligd met tweefactorauthenticatie.",
    ],
  },
  {
    title: "Je rechten",
    body: [
      "Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Ook kun je de verwerking laten beperken, bezwaar maken, je gegevens laten overdragen en je toestemming op elk moment intrekken. Stuur daarvoor een bericht naar info@finstri.nl; we reageren binnen vier weken.",
      "Ben je het oneens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.",
    ],
  },
  {
    title: "Wijzigingen",
    body: [
      "We passen deze verklaring aan wanneer de website of onze werkwijze verandert. Boven aan deze pagina staat wanneer we dat voor het laatst deden.",
    ],
  },
];

function Privacy() {
  // The site has no router, so the title is set here for this one route.
  useEffect(() => {
    document.title = "Privacyverklaring | Finstri";
  }, []);

  return (
    <section className="bg-white px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <a
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-ink"
            href="/"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Terug naar de homepage
          </a>
          <h1 className="mt-8 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
            Privacyverklaring
          </h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-8 text-slate-600">
            Finstri bouwt privacy-first pensioensoftware. Deze website houdt
            zich aan dezelfde regel: we vragen alleen wat we nodig hebben om je
            vraag te beantwoorden, en verder niets.
          </p>
          <p className="mt-4 text-sm text-slate-500" data-numeric>
            Laatst bijgewerkt op {lastUpdated}
          </p>
        </Reveal>

        <div className="mt-14">
          {clauses.map((clause, index) => (
            <Reveal
              as="article"
              className="border-t border-line py-8"
              index={index % 3}
              key={clause.title}
            >
              <h2 className="text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">
                {clause.title}
              </h2>
              {clause.body.map((paragraph) => (
                <p
                  className="mt-4 max-w-[65ch] leading-7 text-slate-600"
                  key={paragraph.slice(0, 40)}
                >
                  {paragraph}
                </p>
              ))}
              {clause.list ? (
                <ul className="mt-4 max-w-[65ch] space-y-2 leading-7 text-slate-600">
                  {clause.list.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ocean"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Privacy;
