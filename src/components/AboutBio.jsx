import { useLayoutEffect, useRef, useState } from "react";
import RichText from "./RichText";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Shows the short bio, which turns into the full bio in place when expanded. The
 * container animates between the two heights while a soft edge wipes down over the
 * incoming content to reveal it.
 */
const AboutBio = ({ bio, expanded, onToggle }) => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const startHeight = useRef(null);
  const [animateText, setAnimateText] = useState(false);

  const shortParagraphs = bio.short ?? [];
  const fullParagraphs = bio.full ?? [];
  const canExpand = fullParagraphs.length > 0;
  const showFull = expanded && canExpand;
  const paragraphs = showFull ? fullParagraphs : shortParagraphs;

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const from = startHeight.current;
    startHeight.current = null;

    if (!viewport || from === null) {
      return undefined;
    }

    if (!showFull && sectionRef.current.getBoundingClientRect().top < 0) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const to = contentRef.current.offsetHeight;
    if (from === to || prefersReducedMotion()) {
      viewport.style.height = "";
      return undefined;
    }

    // Pin the old height and flush layout so the browser has a starting point to transition from.
    viewport.style.height = `${from}px`;
    viewport.getBoundingClientRect();
    viewport.style.height = `${to}px`;

    // Returning to auto height lets later content changes (images, resizes) reflow naturally.
    const release = (event) => {
      if (event.target === viewport && event.propertyName === "height") {
        viewport.style.height = "";
      }
    };

    viewport.addEventListener("transitionend", release);
    return () => viewport.removeEventListener("transitionend", release);
  }, [showFull]);

  const handleToggle = () => {
    startHeight.current = viewportRef.current.offsetHeight;
    setAnimateText(true);
    onToggle();
  };

  return (
    <section id="bio" ref={sectionRef} className="about-section about-bio">
      {bio.heading && <h2 className="about-section-heading">{bio.heading}</h2>}

      <div id="bio-text" ref={viewportRef} className="about-bio-viewport">
        <div
          key={showFull ? "full" : "short"}
          ref={contentRef}
          className={`about-bio-text${animateText ? " is-animated" : ""}`}
        >
          {paragraphs.map((paragraph, index) => (
            <RichText key={index} as="p" text={paragraph} />
          ))}
        </div>
      </div>

      {canExpand && (
        <button
          type="button"
          className="about-bio-toggle"
          aria-expanded={showFull}
          aria-controls="bio-text"
          onClick={handleToggle}
        >
          {showFull ? bio.collapseLabel : bio.expandLabel}
        </button>
      )}
    </section>
  );
};

export default AboutBio;
