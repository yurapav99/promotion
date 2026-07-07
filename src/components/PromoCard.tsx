import Image from "next/image";

import type { GameCard } from "@/data/gameCards";
import { trackPromoClick } from "@/lib/analytics";

type PromoCardProps = {
  game: GameCard;
  onOpen: (url: string) => void;
};

export function PromoCard({ game, onOpen }: PromoCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackPromoClick(game.name, game.url);

    // Inside Telegram WebApp, use the native openLink API
    if (window.Telegram?.WebApp?.openLink) {
      e.preventDefault();
      onOpen(game.url);
      return;
    }

    // Outside Telegram (Safari preview, regular browser):
    // Let the <a href> handle navigation natively — don't preventDefault.
    // This avoids Safari's popup blocker and gesture-chain issues.
  };

  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`tg-game-card tg-${game.id}${game.featured ? " is-featured" : ""}`}
      onClick={handleClick}
      aria-label={`Open ${game.name} bonus`}
    >
      {game.featured ? <div className="tg-best-choice">Best choice</div> : null}

      <div className="tg-game-tag">{game.tag}</div>

      <div className="tg-illustration">
        <Image src={game.image} alt="" className="tg-img" priority />
      </div>

      <div className="tg-game-body">
        <Image
          src={game.casinoLogo}
          alt={game.name}
          className="tg-casino-name-img"
          priority
        />
      </div>

      <div className="tg-game-cta">Play Now -&gt;</div>
    </a>
  );
}
