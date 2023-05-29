## Getting Started

### Steps to run the project

- Install dependencies:

```bash
npm install
# or
yarn
```

- **`!!! Make sure to have installed Sanity globally`**
Check sanity docs for more info: https://www.sanity.io/docs/getting-started-with-sanity-cli


- Create a file `.env.local` and put inside:

1. NEXT_PUBLIC_SANITY_URL=""
2. NEXT_PUBLIC_SANITY_LATEST_PROJECTS=""
3. NEXT_PUBLIC_SANITY_ALL_PROJECTS=""
4. NEXT_PUBLIC_SANITY_PROJECTS=""
5. NEXT_PUBLIC_SANITY_PROJECT_BY_CATEGORY=""
6. NEXT_PUBLIC_SANITY_TOKEN=""

!!! Please, take into account that you need to create a token in Sanity Studio, and put it in NEXT_PUBLIC_SANITY_TOKEN.

Also, the points from 2 to 5 are queries to get data from Sanity. It's up to you to create them. Otherwise, you can use your own queries.

- Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```