import { useEffect, useState } from "react";

/* Adds the border + shadow to the sticky header once the page leaves the top. */
export function useStuckHeader() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return stuck;
}

/* Which nav link is highlighted. A section becomes current once its top passes
   a probe line 130px below the viewport top — but the last section sits at the
   end of the document, so the page can run out of scroll before its top ever
   reaches that line. At the bottom of the page the last section always wins. */
export function useActiveSection(hrefs) {
  const [active, setActive] = useState(hrefs[0]);
  useEffect(() => {
    const setFromScroll = () => {
      const probe = window.scrollY + 130;
      let current = 0;
      hrefs.forEach((href, i) => {
        const el = document.querySelector(href);
        if (el && el.offsetTop <= probe) current = i;
      });
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = hrefs.length - 1;
      setActive(hrefs[current]);
    };
    setFromScroll();
    window.addEventListener("scroll", setFromScroll, { passive: true });
    return () => window.removeEventListener("scroll", setFromScroll);
  }, [hrefs]);
  return active;
}

/* Fades elements in as they enter the viewport. Everything carrying .reveal is
   observed once; without IntersectionObserver they are simply shown. The
   stagger inside a grid comes from the `--d` custom property each card sets,
   not from here, so a row always cascades in the same order. */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Types a word out, pauses, deletes it, then moves to the next in the list —
   looping forever. Returns the text currently shown; the caret is drawn in CSS
   so this hook only ever deals with characters. With reduced motion (or a
   single-item list) it just settles on the first word. */
export function useTypewriter(words, { typeMs = 55, deleteMs = 32, holdMs = 1800, pauseMs = 400 } = {}) {
  const [text, setText] = useState(words[0] ?? "");
  useEffect(() => {
    if (words.length < 2 || reducedMotion()) return;
    let i = 0, char = 0, deleting = false, timer;
    const tick = () => {
      const word = words[i];
      if (!deleting) {
        char++;
        setText(word.slice(0, char));
        if (char === word.length) {
          deleting = true;
          timer = setTimeout(tick, holdMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      } else {
        char--;
        setText(word.slice(0, char));
        if (char === 0) {
          deleting = false;
          i = (i + 1) % words.length;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, deleteMs);
      }
    };
    timer = setTimeout(tick, typeMs);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- words is a static list from data/site.js
  }, []);
  return text;
}

/* Soft glow that follows the pointer across any hoverable card. One delegated
   listener writes the pointer position into --mx / --my on the card under it;
   the CSS decides how that looks. Skipped on touch devices, which have no hover. */
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches || reducedMotion()) return;
    const onMove = (e) => {
      const card = e.target.closest?.(".card.hoverable");
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - box.left}px`);
      card.style.setProperty("--my", `${e.clientY - box.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

/* Lets the hero grid drift slower than the page as it scrolls away. The value
   goes on the hero element only, so a scroll frame restyles one subtree rather
   than the whole document, and it stops once the hero is off screen. */
export function useHeroParallax() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero || reducedMotion()) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, hero.offsetHeight);
      hero.style.setProperty("--sy", String(Math.round(y)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

/* How far down the page we are, 0 → 1, for the accent bar under the header.
   Reads are batched into one animation frame so the scroll stays cheap. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}
