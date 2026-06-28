"use client";

import { useCallback, useEffect, useState } from "react";

export function useTelegramWebApp() {
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (!webApp) {
      return;
    }

    webApp.ready();
    setIsTelegram(true);
  }, []);

  const openExternalLink = useCallback(
    (url: string) => {
      const webApp = window.Telegram?.WebApp;

      if (isTelegram && webApp?.openLink) {
        webApp.openLink(url);
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
    },
    [isTelegram],
  );

  return { openExternalLink };
}
