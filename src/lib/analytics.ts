type GtagEventParams = {
  casino_name?: string;
  link_url?: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParams?: GtagEventParams,
    ) => void;
  }
}

export function trackPromoClick(casinoName: string, url: string) {
  window.gtag?.("event", "promo_card_click", {
    casino_name: casinoName,
    link_url: url,
  });
}
