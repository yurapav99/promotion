"use client";

import { PromoCard } from "@/components/PromoCard";
import { GAME_CARDS } from "@/data/gameCards";
import { useTelegramWebApp } from "@/hooks/useTelegramWebApp";

export function TelegramMiniAd() {
  const { openExternalLink } = useTelegramWebApp();

  return (
    <div className="row justify-content-center m-0">
      <div className="col-12 col-md-10 col-lg-8 p-0">
        <section className="tg-shell animated-card" aria-labelledby="promo-title">
          <header className="tg-hero">
            <p className="tg-hero-eyebrow">Crypto Casino Promo</p>
            <h1 id="promo-title" className="tg-hero-title">
              Unlock <span>Exclusive</span> Crypto Casino Bonuses
            </h1>
            <p className="tg-hero-subtitle">Choose a reward card below.</p>
          </header>

          <main className="tg-main">
            <div className="row g-3">
              {GAME_CARDS.map((game) => (
                <div
                  key={game.id}
                  className={
                    game.featured
                      ? "col-12 d-flex justify-content-center tg-featured-column"
                      : "col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
                  }
                >
                  <PromoCard game={game} onOpen={openExternalLink} />
                </div>
              ))}
            </div>

            <div className="tg-info mt-3">
              <p className="tg-info-line">
                Stake is the recommended first pick | Instant crypto deposits |
                Plinko, slots, crash and more
              </p>

              <p className="tg-age-warning">
                For adults only - 18+ required to participate. Please gamble
                responsibly.
              </p>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
