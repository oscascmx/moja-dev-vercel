This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started - Docker images

```
docker compose up
```

## Getting Started - Local development

First, make sure you have all components installed

```
npm install
```

Particularly, double check @prisma/client is installed

```
npm list @prisma/client
```

Also the first time, make sure it is initialized:
```bash
npm install prisma --save-dev
npx prisma init
```

And make sure you have a .env file with the required variables:

   ```env
   # Database
   DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb
   PRISMA_DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb

   # Authentication
   JWT_SECRET=your-secret-key-here
   AUTH_PASSWORD_SALT=your-salt-here
   ```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
