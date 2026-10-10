import { useEffect, useState } from "react";

const defaultIntervalMs = 3000;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia?.(reducedMotionQuery).matches ?? false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(reducedMotionQuery);
    if (!mediaQuery) {
      return undefined;
    }

    const onChange = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Drives the rotation timing: advance on an interval, hold while hovered so a
 * word can be read, and stay on a single frame when motion is reduced.
 */
export default function useRotationIndex({ count, intervalMs = defaultIntervalMs }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const stopped = hovered || reducedMotion || count < 2;

  useEffect(() => {
    if (stopped) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [stopped, intervalMs, count]);

  return {
    index: count > 0 ? index % count : 0,
    hoverProps: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}
