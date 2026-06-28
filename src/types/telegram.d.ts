type TelegramWebApp = {
  ready: () => void;
  openLink?: (url: string) => void;
};

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
