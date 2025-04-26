"use client";

import { useEffect, useState } from "react";

export default function TelegramMiniAd() {
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      setIsTelegram(true);
    }
  }, []);

  const handleClick = () => {
    const encoded = "aHR0cHM6Ly9zdGFrZS5nYW1lcy8/Yz1iN2ZkYjYxMmZl";
    const url = atob(encoded);

    if (isTelegram && window.Telegram.WebApp.openLink) {
      window.Telegram.WebApp.openLink(url);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md max-w-sm w-full mx-auto p-4 animated-card">
      <a href="#" onClick={handleClick} className="block">
        <img
          src="https://i.pinimg.com/736x/ef/19/9e/ef199e2c11ac55d0f331111ee31fff9b.jpg"
          alt="Banner"
          className="image-style mb-3"
        />
      </a>
      <div className="text-sm text-amber-600 mb-1 font-medium">🔥 Trending Now</div>
      <div className="text-md font-semibold mb-1 text-yellow-600">
        <span className="font-bold">LuckyJackpot</span> – Play & Win Real Cash Instantly
      </div>
      <p className="text-sm text-gray-800 mb-4 leading-snug">
        💸 Millions won every day. Don’t miss your chance to hit it BIG!
      </p>
      <button
        onClick={handleClick}
        className="w-full animated-button text-white font-semibold text-sm py-2 mt-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition cursor-pointer"
      >
        WIN NOW →
      </button>
    </div>
  );
}
