import Image from "next/image";

import type { GameCard } from "@/data/gameCards";
import { trackPromoClick } from "@/lib/analytics";

type PromoCardProps = {
  game: GameCard;
  onOpen: (url: string) => void;
};

export function PromoCard({ game, onOpen }: PromoCardProps) {
  const handleOpen = () => {
    trackPromoClick(game.name, game.url);
    onOpen(game.url);
  };

  return (
    <button
      type="button"
      className={`tg-game-card tg-${game.id}${game.featured ? " is-featured" : ""}`}
      onClick={handleOpen}
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
    </button>
  );
}
