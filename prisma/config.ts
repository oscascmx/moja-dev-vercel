 // prisma.config.ts
  export default defineConfig({
    migrations: {
      seed: 'bun·./prisma/seed.ts',
    },
    datasource: {
      url: process.env.DATABASE_URL,
    },
  })