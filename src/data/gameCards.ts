import type { StaticImageData } from "next/image";

import bcGameLogo from "@/images/bc-game-logo.png";
import betpandaLogo from "@/images/Betpanda-Casino-logo-white.png";
import candyImage from "@/images/candy.png";
import cryptoGamesLogo from "@/images/crypto-games-logo.png";
import dogHouseImage from "@/images/dog_house.png";
import olimpusImage from "@/images/olimpus.png";
import plinkoImage from "@/images/plinko.png";
import stakeLogo from "@/images/stake-logo-white.png";

export type GameCard = {
  id: string;
  name: string;
  tag: string;
  url: string;
  image: StaticImageData;
  casinoLogo: StaticImageData;
  featured?: boolean;
};

export const GAME_CARDS: GameCard[] = [
  {
    id: "candy-slot",
    name: "Stake",
    tag: "Exclusive Bonus",
    url: "https://stake.games/?c=b7fdb612fe",
    image: candyImage,
    casinoLogo: stakeLogo,
    featured: true,
  },
  {
    id: "dog-house",
    name: "BC.Game",
    tag: "Exclusive Bonus",
    url: "https://bc.game/i-7odg5kx8-n/",
    image: olimpusImage,
    casinoLogo: bcGameLogo,
  },
  {
    id: "plinko",
    name: "Betpanda",
    tag: "Exclusive Bonus",
    url: "https://betpandacasino.io/?referral=4QX499&type=registration&modal=user&isReferral=true",
    image: plinkoImage,
    casinoLogo: betpandaLogo,
  },
  {
    id: "crypto-spin",
    name: "Crypto Games",
    tag: "Exclusive Bonus",
    url: "https://crypto-games.io?r=zSQlAf",
    image: dogHouseImage,
    casinoLogo: cryptoGamesLogo,
  },
];
