import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="x-eyebrow">
      <span className="x-eyebrow__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
  className = "",
}: SectionHeadProps) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="x-h2 mt-5">{title}</h2>
      {intro ? <p className="x-lead mt-5">{intro}</p> : null}
    </div>
  );
}

/** Fades and lifts into view as it scrolls in (CSS scroll-driven; static where unsupported). */
export function Reveal({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <div className={`x-reveal ${className}`} style={{ "--i": index } as CSSProperties}>
      {children}
    </div>
  );
}

/** Glass card whose edge lights up under the pointer. */
export function SpotCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} id={id} onPointerMove={handleMove} className={`x-card ${className}`}>
      {children}
    </div>
  );
}

export const CONTACT = {
  email: "alligenticsai@gmail.com",
  phoneLabel: "+92 329 247 4455",
  phoneHref: "tel:+923292474455",
  whatsappNumber: "923292474455",
  whatsappMessage: "Hi Alligentics, I'd like to know more about your automation services.",
  instagram: "https://www.instagram.com/alligentics?stkn=MzJtZ2Q4cWJ1NzN4",
  linkedin: "https://www.linkedin.com/company/alligentics-ai/posts/?feedView=all",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
