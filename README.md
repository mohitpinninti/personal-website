# Personal Portfolio

A personal portfolio website built with React, Vite, and Firebase/Firestore.

## Tech Stack

- **Frontend:** React 18, React Router, React Three Fiber (3D avatar), FontAwesome
- **Data:** Firebase Firestore (all content), Notion API (quote source, synced via cron)
- **Build:** Vite
- **Deployment:** Vercel

## Pages

| Route | Page | Data Source |
|-------|------|-------------|
| `/` | Home — intro card + recent updates | Firestore |
| `/about` | About (WIP) | — |
| `/career` | Career — skills, experience, projects | Firestore |
| `/blog` | Blog (WIP) | — |
| `/resume` | Resume PDF embed | Static file |
| `/quotewall` | Quote Wall | Firestore (synced from Notion weekly) |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A [Firebase](https://console.firebase.google.com/) project with Firestore enabled
- (Optional) A [Notion](https://www.notion.so/) integration for automatic quote syncing

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd personal-website
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your values in `.env.local`:

| Variable | Where to find it | Used by |
|----------|-----------------|---------|
| `VITE_FIREBASE_API_KEY` | Firebase Console → Project Settings → General | Frontend |
| `VITE_FIREBASE_AUTH_DOMAIN` | Same as above | Frontend |
| `VITE_FIREBASE_PROJECT_ID` | Same as above | Frontend |
| `VITE_FIREBASE_STORAGE_BUCKET` | Same as above | Frontend |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Same as above | Frontend |
| `VITE_FIREBASE_APP_ID` | Same as above | Frontend |
| `NOTION_API_KEY` | Notion → Integrations → Your integration's secret | Scripts / Cron |
| `NOTION_QUOTES_DB` | Notion database ID for quotes | Scripts / Cron |

### 3. Set up Firestore

1. Go to [Firebase Console](https://console.firebase.google.com/) → your project → Firestore Database
2. Click **Create database** if you haven't already
3. Set security rules to allow public reads:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### 4. Set up the Firebase service account (for seeding)

1. Firebase Console → Project Settings → **Service Accounts**
2. Click **Generate new private key**
3. Save the downloaded JSON as `serviceAccountKey.json` in the project root

> ⚠️ This file is in `.gitignore` — never commit it.

### 5. Seed the database

```bash
npm run seed
```

This uploads `temp/seed.json` to Firestore. If you're starting fresh, first copy the initial seed data:

```bash
mkdir temp
cp src/data/seed.json temp/seed.json
npm run seed
```

### 6. Run the dev server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Updating Content

All portfolio content (jobs, skills, projects, recent updates, intro, social links) lives in Firestore. To update it:

### Download → Edit → Upload workflow

```bash
# 1. Download current data from Firestore to temp/seed.json
npm run unseed

# 2. Open temp/seed.json and make your changes
#    (add a job, update skills, add a project, etc.)

# 3. Upload changes back to Firestore
npm run seed
```

The `temp/` directory is gitignored — it's just a local workspace for editing data.

### What lives in each collection

| Collection | Used by | Fields |
|------------|---------|--------|
| `jobs` | Career page | title, company, team, startDate, endDate, descItems[], order |
| `skills` | Career page | category (languages/tools/interests), name, order |
| `projects` | Career page | title, description, projectLinkURL, imageURL, tools[], order |
| `recentUpdates` | Home page | date, items[{event, desc, imageURL}], order |
| `intro` | Home page | greeting, firstName, lastName, tagline, roles[] |
| `socialLinks` | Footer | platform, url, icon, order |
| `quotes` | Quote Wall | author, quote, order |

## Quotes Sync (Notion → Firestore)

Quotes are sourced from a Notion database and synced to Firestore automatically.

### How it works

```
Notion DB ──(weekly cron)──> api/sync-quotes.js ──> Firestore "quotes" collection
                                                          ↑
QuoteWall page ────── useFirestoreCollection ─────────────┘
```

- A **Vercel Cron Job** runs every Sunday at midnight UTC
- It fetches quotes from Notion, filters for `Display Status = "Website"`, and writes them to the Firestore `quotes` collection
- The QuoteWall page reads from Firestore like every other page

### Manual sync

To sync quotes on-demand without waiting for the cron:

```bash
npm run sync-quotes
```

This requires `NOTION_API_KEY` and `NOTION_QUOTES_DB` in your `.env.local` and `serviceAccountKey.json` in the project root.

### Vercel setup for cron

The cron is configured in `vercel.json`. For it to work in production, set these environment variables in Vercel's project settings:

| Variable | Value |
|----------|-------|
| `NOTION_API_KEY` | Your Notion integration secret |
| `NOTION_QUOTES_DB` | Your Notion quotes database ID |
| `FIREBASE_SERVICE_ACCOUNT` | Your Firebase service account key (paste the entire JSON string) |
| `CRON_SECRET` | A random secret string (used to protect the endpoint) |

> Vercel automatically sends the `CRON_SECRET` as a Bearer token when invoking cron jobs.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run seed` | Upload `temp/seed.json` to Firestore |
| `npm run unseed` | Download Firestore data to `temp/seed.json` |
| `npm run sync-quotes` | Sync quotes from Notion → Firestore (manual) |

## Project Structure

```
├── api/
│   └── sync-quotes.js         # Vercel cron function: Notion → Firestore quotes sync
├── scripts/
│   ├── seed-firestore.js      # Upload seed data to Firestore
│   ├── unseed-firestore.js    # Download Firestore data locally
│   └── sync-quotes.js         # Local manual quotes sync
├── src/
│   ├── components/            # Reusable UI components
│   ├── data/
│   │   └── seed.json          # Initial seed data (reference copy)
│   ├── hooks/
│   │   ├── useFirestoreCollection.js
│   │   └── useFirestoreDocument.js
│   ├── pages/                 # Route-level page components
│   ├── services/
│   │   ├── firebase.js        # Firebase app initialization
│   │   └── firestore.js       # Firestore query helpers
│   ├── App.jsx                # Router and layout
│   └── main.jsx               # Entry point
├── .env.example               # Template for environment variables
├── vercel.json                # Vercel cron job configuration
├── package.json
└── vite.config.js
```

## Deployment

The site deploys to **Vercel**. The following environment variables must be configured in Vercel's project settings:

**Frontend (client-side):**
- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`

**Server-side (cron job):**
- `NOTION_API_KEY`, `NOTION_QUOTES_DB`, `FIREBASE_SERVICE_ACCOUNT`, `CRON_SECRET`