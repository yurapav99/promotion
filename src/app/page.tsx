"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import candyImg from "../images/candy.png";
import dogImg from "../images/dog_house.png";
import olimpusImg from "../images/olimpus.png";
import plinkoImg from "../images/plinko.png";

import stakeIng from "../images/stake-logo-white.png";
import bcgame from "../images/bc-game-logo.png"
import betpanda from "../images/Betpanda-Casino-logo-white.png"
import crypto_games from "../images/crypto-games-logo.png"


declare global {
  interface TelegramWebApp {
    ready: () => void;
    openLink?: (url: string) => void;
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

type GameCard = {
  id: string;
  tag: string;
  url: string;          // ⬅ direct link
  image: any;
  casinoNameImg: any;
};

const GAME_CARDS: GameCard[] = [
  {
    id: "candy-slot",
    tag: "EXCLUSIVE BONUS",
    url: "https://stake.games/?c=b7fdb612fe",
    image: candyImg,
    casinoNameImg: stakeIng,
  },
  {
    id: "dog-house",
    tag: "EXCLUSIVE BONUS",
    url: "https://bc.game/i-7odg5kx8-n/",
    image: olimpusImg,
    casinoNameImg: bcgame,
  },
  {
    id: "plinko",
    tag: "EXCLUSIVE BONUS",
    url: "https://betpandacasino.io/?referral=4QX499&type=registration&modal=user&isReferral=true",
    image: plinkoImg,
    casinoNameImg: betpanda,
  },
  {
    id: "crypto-spin",
    tag: "EXCLUSIVE BONUS",
    url: "https://crypto-games.io?r=zSQlAf",
    image: dogImg,
    casinoNameImg: crypto_games,
  },
];

export default function TelegramMiniAd() {
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      setIsTelegram(true);
    }
  }, []);

  const openLink = (url: string) => {
    if (isTelegram && window.Telegram?.WebApp.openLink) {
      window.Telegram.WebApp.openLink(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="row justify-content-center m-0">
      <div className="col-12 col-md-10 col-lg-8 p-0">
        <div className="tg-shell animated-card">

          <div className="tg-orb tg-orb-1" />
          <div className="tg-orb tg-orb-2" />
          <div className="tg-orb tg-orb-3" />

          <header className="tg-hero">
            <p className="tg-hero-eyebrow">Crypto Casino Promo</p>
            <h1 className="tg-hero-title">
              Unlock <span>Exclusive</span> Crypto Casino Bonuses
            </h1>
            <p className="tg-hero-subtitle">Choose a reward card below.</p>
          </header>

          <main className="tg-main">
            <div className="row g-3">
              {GAME_CARDS.map((game) => (
                <div key={game.id} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className={`tg-game-card tg-${game.id}`}
                    onClick={() => openLink(game.url)}
                  >
                    <div className="tg-game-tag">{game.tag}</div>

                    <div className="tg-illustration">
                      <Image src={game.image} alt={""} className="tg-img" priority />
                    </div>

                    <div className="tg-game-body">
                      <Image
                        src={game.casinoNameImg}
                        alt="Casino Name"
                        className="tg-casino-name-img"
                        priority
                      />
                    </div>

                    <div className="tg-game-cta">Play Now →</div>
                  </button>
                </div>
              ))}
            </div>

            <div className="tg-info mt-3">
              <p className="tg-info-line">
                ⚡ Higher rakeback than regular links · ✦ Instant crypto deposits · 🎮 Plinko, slots, crash & more
              </p>

              <p className="tg-age-warning">
                🔞 For adults only — 18+ required to participate. Please gamble responsibly.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
