## Getting Started

First, install dependencies:
```bash
npm install
# or
yarn
```
Then run the development server:
```bash
npm run dev
# or
yarn dev
```

### Settings

Create a file `.env.local` and put inside:
1. NEXT_PUBLIC_SANITY_URL="https://f2g1h82s.api.sanity.io/v2021-10-21/data/query/production", where **f2g1h82s** is your sanity project ID
2. NEXT_PUBLIC_SANITY_LATEST_PROJECTS="?query=...", your query to get latest projects
3. NEXT_PUBLIC_SANITY_ALL_PROJECTS="?query=...", your query to get all projects
4. NEXT_PUBLIC_SANITY_TOKEN="", sanity token created in sanity studio under API section

Run Sanity (localhost:3333)


#### **`!!! Make sure to have installed Sanity globally`**
Then:
```bash
cd sanity && sanity start
```
It runs local server at localhost:3333