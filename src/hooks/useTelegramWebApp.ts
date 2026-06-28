"use client";

import { useCallback, useEffect } from "react";

export function useTelegramWebApp() {
  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (!webApp) {
      return;
    }

    webApp.ready();
  }, []);

  const openExternalLink = useCallback((url: string) => {
    const webApp = window.Telegram?.WebApp;

    if (webApp?.openLink) {
      webApp.openLink(url);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return { openExternalLink };
}
