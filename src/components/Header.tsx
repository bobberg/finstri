import { Menu, X } from "lucide-react";
import { useState } from "react";
import FinstriMark from "./brand/FinstriMark";
import Button from "./ui/Button";

const navigation = [
  { label: "Oplossingen", href: "#oplossingen" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Over ons", href: "#over-ons" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Hoofdnavigatie"
      >
        <a
          className="group flex min-w-0 items-center gap-3"
          href="#top"
          aria-label="Finstri home"
        >
          <FinstriMark className="h-11 w-11 shrink-0 text-[#8B5CF6] drop-shadow-[0_14px_24px_rgba(124,58,237,0.12)] transition duration-200 group-hover:-translate-y-0.5 group-hover:text-[#7C3AED]" />
          <span className="text-xl font-bold tracking-normal text-ink">
            Finstri
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-ink"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button className="min-w-36" size="md" onClick={scrollToContact}>
            Plan een demo
          </Button>
        </div>

        <button
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white text-ink transition hover:border-ocean/35 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-white px-4 py-4 shadow-soft-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-cloud hover:text-ink"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setIsOpen(false);
                scrollToContact();
              }}
            >
              Plan een demo
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
