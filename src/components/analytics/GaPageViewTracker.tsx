"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GaPageViewTrackerProps = {
  measurementId: string;
};

export function GaPageViewTracker({ measurementId }: GaPageViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    const query = window.location.search;
    const pagePath = `${pathname}${query}`;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      send_to: measurementId
    });
  }, [measurementId, pathname]);

  return null;
}
