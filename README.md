# 🎬 Eka Movie Tracker

A real-time movie discovery web app built with **Next.js 15**, **TypeScript**, and **Tailwind CSS** — powered by the TMDB API. Users can explore trending films, browse new releases, search for titles, and view detailed movie info including trailers.

🔗 **Live Demo:** [cha9-mauve.vercel.app](https://cha9-mauve.vercel.app)

---

## Features

- **Live TMDB Integration** — Fetches up-to-date trending and new release data directly from The Movie Database API
- **Movie Detail Pages** — Each film has a dedicated page with synopsis, release date, runtime, rating, and a YouTube trailer link
- **Search** — Instantly find movies by title
- **Optimized Images** — Uses `next/image` for lazy loading and automatic resizing
- **Responsive Design** — Fully mobile-friendly layout built with Tailwind CSS
- **Fast & SEO-friendly** — Leverages Next.js server-side rendering and static generation where appropriate

---

## Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| Next.js 15   | Framework (SSR, SSG, routing) |
| TypeScript   | Type-safe development         |
| Tailwind CSS | Utility-first styling         |
| TMDB API     | Movie data source             |
| Vercel       | Deployment & hosting          |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
git clone https://github.com/radengunawan/cha9.git
cd cha9
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage (Trending + New Releases)
│   └── movie/[id]/   # Dynamic movie detail pages
├── components/       # Reusable UI components
└── lib/              # TMDB API utilities
public/               # Static assets
```

---

## Deployment

The app is deployed on **Vercel** with automatic deployments on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/radengunawan/cha9)

---

## Roadmap

- [ ] User authentication (NextAuth.js)
- [ ] Personal watchlist & watched history
- [ ] Movie ratings and reviews
- [ ] Genre filtering
- [ ] TV show support

---

## Author

**Eka Gunawan**
© 2026 Eka Gunawan. All rights reserved.
