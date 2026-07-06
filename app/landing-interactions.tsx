"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (method: string, name: string, data?: Record<string, unknown>) => void;
    gtag?: (method: string, name: string, data?: Record<string, unknown>) => void;
  }
}

function trackEvent(name: string, data: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...data });
  window.fbq?.("trackCustom", name, data);
  window.gtag?.("event", name, data);
}

export default function LandingInteractions() {
  useEffect(() => {
    const progress = document.getElementById("scrollProgress");
    const tracked = new Set<number>();

    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;
      [25, 50, 75, 90].forEach((mark) => {
        if (pct >= mark && !tracked.has(mark)) {
          tracked.add(mark);
          trackEvent(`Scroll${mark}`);
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;
      trackEvent(target.dataset.track || "Click", { position: target.dataset.position || "Unknown" });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
