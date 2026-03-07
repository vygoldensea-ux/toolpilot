export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
    posthog?: {
      capture?: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}
