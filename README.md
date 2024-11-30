# Linguify

Linguify is a language learning platform. Learn a new language today!

Demo - https://linguify-demo.vercel.app

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL`

You can also use the provided `.env.example` file to configure these variables

```bash
cp .env.example .env
```
## Deployment

To deploy this project run, make sure you have pnpm installed first and have configured the environment variables.

```bash
  # install the packages
  pnpm install

  # run the dev server
  pnpm run dev
```
Visit http://localhost:3000


## Tech Stack

- [Next.js](https://nextjs.org/): A React-based framework for building server-rendered and static web applications.  
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.  
- [Shadcn/ui](https://ui.shadcn.com/): A collection of reusable components for building accessible and customizable UIs.  
- [Drizzle ORM](https://orm.drizzle.team/): A lightweight, type-safe ORM for TypeScript and JavaScript applications.  
- [PostgreSQL](https://neon.tech/): Serverless PostgreSQL database platform (Neon DB).
- [Clerk](https://clerk.com/): An authentication and user management platform for modern web applications.

## License
- [MIT](LICENSE)
