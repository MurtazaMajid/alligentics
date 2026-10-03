import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const NAV = [
  { id: "services", label: "Services" },
  { id: "demo", label: "See it work" },
  { id: "process", label: "How we work" },
  { id: "pricing", label: "Pricing" },
  { id: "team", label: "About" },
] as const;

const TRACKED_IDS = [...NAV.map((item) => item.id), "faq", "contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      let current = "";
      for (const id of TRACKED_IDS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(NAV.some((item) => item.id === current) ? current : "");
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`x-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="x-container flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Alligentics home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/alligentics-logo.png"
            alt=""
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="font-display text-xl font-semibold tracking-tight">Alligentics</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="x-navlink"
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="x-btn x-btn--primary hidden !min-h-11 !px-5 !py-2 text-sm sm:inline-flex"
          >
            Book a free call
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="x-iconbtn lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="x-mobile-menu lg:hidden">
          <nav className="x-container flex flex-col py-3" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="x-mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="x-btn x-btn--primary mt-3" onClick={() => setOpen(false)}>
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
