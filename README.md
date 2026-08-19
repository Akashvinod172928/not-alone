# Not Alone — Official Landing Page & APK Download Experience

This is the production-ready official web application for **Not Alone**, built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## 🚀 Quick Start & Local Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

---

## 📦 Production Build & Testing

To test the production build locally:

```bash
npm run build
npm run start
```

This compiles the Next.js App Router static and server routes, ensuring zero TypeScript or ESLint errors.

---

## ⚡ Vercel Deployment (Step-by-Step)

This repository is optimized for one-click direct deployment on **Vercel** with GitHub integration:

1. **Push to GitHub**: Push this repository to your GitHub account (`git push origin main`).
2. **Open Vercel**: Log in to [Vercel](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. **Import GitHub Repository**: Select your `not-alone-web` repository from the list.
4. **Project Settings**:
   - Framework Preset: **Next.js** (Automatically detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: Next.js default (`.next`)
5. **Environment Variables** *(Optional)*:
   - Add `NEXT_PUBLIC_APP_URL` with your custom domain (e.g. `https://notalone.app`).
6. **Click Deploy**: Vercel will build and launch your website instantly.

---

## 📲 APK Download Assets

The production Android APK asset is hosted directly within the public static directory at:

```text
public/downloads/not-alone.apk
```

After deploying to Vercel, your Android APK download will be accessible globally at:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app/downloads/not-alone.apk
```

All **Download the App** CTAs across the website rely on `src/config/site.ts` (`siteConfig.appDownloadUrl`) for seamless maintenance.
