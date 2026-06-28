# Crypto Casino Promo

Telegram mini app promo page built with Next.js, React, Bootstrap, and TypeScript.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal. Next usually uses:

```text
http://localhost:3000
```

If port 3000 is busy, Next will automatically choose another port, such as `http://localhost:3001`.

## Google Analytics

Create a `.env.local` file and add your GA4 measurement ID:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-W043EYGXSC
```

Restart `npm run dev` after changing `.env.local`. Analytics stays disabled until this value is set.

For production, add the same environment variable in Vercel for:

```text
https://promotion-lnea.vercel.app
```

## Production build

```bash
npm run build
npm run start
```

## Checks

```bash
npm run lint
```
