import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Handshake,
  Sparkles,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import Button from "./ui/Button";
import Section from "./ui/Section";

type HelpOption = "info" | "demo" | "anders";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  helpWith: HelpOption;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  helpWith: "demo",
  message: "",
  consent: false,
};

const helpOptions: Array<{ value: HelpOption; label: string }> = [
  { value: "info", label: "Ik wil graag meer informatie" },
  { value: "demo", label: "Ik wil graag een vrijblijvende demo" },
  { value: "anders", label: "Anders:" },
];

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = useMemo(
    () =>
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.consent,
    [form.consent, form.email, form.firstName, form.lastName],
  );

  const updateField = <Field extends keyof FormState>(
    field: Field,
    value: FormState[Field],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm(initialState);
    }, 900);
  };

  return (
    <Section
      id="contact"
      className="bg-cloud"
      innerClassName="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-start"
    >
      <div className="lg:sticky lg:top-28">
        <p className="text-sm font-bold uppercase text-ocean">Plan afspraak</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight tracking-normal text-ink sm:text-4xl">
          Plan een gesprek over de volgende stap in pensioenplanning.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Verbeter het pensioeninzicht van je klanten en help hen om meer voor
          hun pensioenvermogen te gaan doen met onze innovatieve tools. Weten
          wat Finstri voor jouw bedrijf kan betekenen? Vraag vrijblijvend meer
          informatie of een demo aan.
        </p>

        <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex items-center gap-3 rounded-md border border-line bg-white p-4">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-mint"
            />
            Gratis demo
          </div>

          <div className="flex items-center gap-3 rounded-md border border-line bg-white p-4 sm:col-span-2 lg:col-span-1 ">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-mint"
            />
            Geheel vrijblijvend
          </div>
        </div>
      </div>

      <form
        className="rounded-lg border border-line bg-white p-5 shadow-soft-xl sm:p-7"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold text-ink">Voornaam</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
              onChange={(event) => updateField("firstName", event.target.value)}
              required
              type="text"
              value={form.firstName}
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-ink">Achternaam</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
              onChange={(event) => updateField("lastName", event.target.value)}
              required
              type="text"
              value={form.lastName}
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-ink">E-mail</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
              onChange={(event) => updateField("email", event.target.value)}
              required
              type="email"
              value={form.email}
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-ink">Telefoonnummer</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
              onChange={(event) => updateField("phone", event.target.value)}
              type="tel"
              value={form.phone}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-bold text-ink">Bedrijfsnaam</span>
            <input
              className="mt-2 h-12 w-full rounded-md border border-line bg-white px-4 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
              onChange={(event) => updateField("company", event.target.value)}
              type="text"
              value={form.company}
            />
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-bold text-ink">
            Waarmee kunnen we je helpen?
          </legend>
          <div className="mt-3 grid gap-3">
            {helpOptions.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-start gap-3 rounded-md border border-line bg-cloud p-4 transition hover:border-ocean/35 hover:bg-white"
              >
                <input
                  checked={form.helpWith === option.value}
                  className="mt-1 h-4 w-4 accent-ocean"
                  name="helpWith"
                  onChange={() => updateField("helpWith", option.value)}
                  type="radio"
                />
                <span className="text-sm font-semibold text-slate-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 block">
          <span className="text-sm font-bold text-ink">Bericht</span>
          <textarea
            className="mt-2 min-h-32 w-full resize-y rounded-md border border-line bg-white px-4 py-3 text-base text-ink transition placeholder:text-slate-400 hover:border-slate-300 focus:border-ocean focus:shadow-focus-ring focus:outline-none"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Waarmee kunnen we je helpen?"
            value={form.message}
          />
        </label>

        <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            checked={form.consent}
            className="mt-1 h-4 w-4 rounded accent-ocean"
            onChange={(event) => updateField("consent", event.target.checked)}
            required
            type="checkbox"
          />
          <span>
            Ik geef Finstri toestemming om mijn persoonlijke data op te slaan en
            te verwerken volgens de{" "}
            <a
              className="font-bold text-ocean transition hover:text-ink"
              href="#privacy"
            >
              privacyverklaring
            </a>
          </span>
        </label>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            className="w-full sm:w-auto sm:min-w-36"
            disabled={!canSubmit}
            icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}
            isLoading={isSubmitting}
            type="submit"
          >
            Verstuur
          </Button>
          {isSubmitted ? (
            <p
              className="flex items-center gap-2 text-sm font-bold text-mint"
              role="status"
            >
              <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
              Bedankt, we nemen snel contact op.
            </p>
          ) : null}
        </div>
      </form>
    </Section>
  );
}

export default ContactForm;
