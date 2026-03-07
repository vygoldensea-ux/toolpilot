"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type GaPageViewTrackerProps = {
  measurementId: string;
};

export function GaPageViewTracker({ measurementId }: GaPageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const search = searchParams.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.gtag("config", measurementId, {
      page_path: pagePath,
      page_title: document.title
    });
  }, [measurementId, pathname, searchParams]);

  return null;
}
