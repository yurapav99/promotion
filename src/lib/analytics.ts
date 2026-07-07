type GtagEventParams = {
  casino_name?: string;
  link_url?: string;
  card_position?: number;
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

export function trackPromoClick(
  casinoName: string,
  url: string,
  cardPosition?: number,
) {
  // GA4 event — shows up under Events > promo_card_click
  // with custom dimensions: casino_name, link_url, card_position
  window.gtag?.("event", "promo_card_click", {
    casino_name: casinoName,
    link_url: url,
    card_position: cardPosition,
  });

  // Console log for debugging (remove in production if needed)
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[Analytics] promo_card_click: ${casinoName} (position ${cardPosition})`,
    );
  }
}
