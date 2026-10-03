import { useEffect, useRef, useState, type RefObject } from "react";

/** True when the visitor has asked the OS to reduce motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return reduced;
}

/** Tracks whether an element is currently on screen. */
export function useInView<T extends Element>(
  threshold = 0.2,
  rootMargin = "0px",
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      { threshold, rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

/** Counts up to `target` once `active` becomes true. */
export function useCountUp(target: number, active: boolean, duration = 1400): number {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (reduced) {
      setValue(target);
      return undefined;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reduced]);

  return value;
}

type LoopOptions = {
  total: number;
  stepMs: number;
  holdLastMs: number;
  active: boolean;
};

/**
 * Steps through 0..total-1 on a timer, holding the final step a little longer,
 * then loops. Reduced-motion visitors get the finished state with no looping.
 */
export function useTimedLoop({
  total,
  stepMs,
  holdLastMs,
  active,
}: LoopOptions): [number, (step: number) => void] {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) setStep(total - 1);
  }, [reduced, total]);

  useEffect(() => {
    if (reduced || !active) return undefined;
    const delay = step === total - 1 ? holdLastMs : stepMs;
    const id = window.setTimeout(() => setStep((current) => (current + 1) % total), delay);
    return () => window.clearTimeout(id);
  }, [step, active, reduced, total, stepMs, holdLastMs]);

  return [step, setStep];
}
