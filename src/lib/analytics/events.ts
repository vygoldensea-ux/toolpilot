export type AnalyticsEventName = "tool_used" | "copy_clicked" | "example_clicked";

export type AnalyticsEventPayload = Record<string, string | number | boolean | null | undefined>;

function asStringPayload(payload: AnalyticsEventPayload) {
  return Object.entries(payload).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = String(value ?? "");
    return acc;
  }, {});
}

export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    // Google Analytics (gtag)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    // Plausible custom events
    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: asStringPayload(payload) });
    }

    // PostHog custom events
    if (window.posthog && typeof window.posthog.capture === "function") {
      window.posthog.capture(eventName, payload);
    }
  } catch {
    // Analytics should never break user flows.
  }
}
