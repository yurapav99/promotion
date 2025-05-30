"use client";

import { useEffect, useState } from "react";

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

    if (isTelegram && window.Telegram?.WebApp.openLink) {
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
      <div className="text-sm text-blue-600 mb-1 font-medium">🚀 Популярно сегодня</div>
      <div className="text-md font-semibold mb-1 text-gray-800">
        <span className="font-bold">LuckyPortal</span> – Доступ к эксклюзивным предложениям
      </div>
      <p className="text-sm text-gray-700 mb-4 leading-snug">
        Узнайте больше и получите максимум от вашего Telegram-опыта.
      </p>
      <p className="text-xs text-gray-500 mb-2">🔞 Только для лиц 18 лет и старше</p>
      <button
        onClick={handleClick}
        className="w-full animated-button text-white font-semibold text-sm py-2 mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition cursor-pointer"
      >
        Перейти →
      </button>
    </div>
  );
}
