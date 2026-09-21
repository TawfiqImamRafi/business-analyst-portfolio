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
