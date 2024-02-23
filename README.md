# T3-Drizzle-Clerk

This is a [T3 Stack](https://create.t3.gg/) project with drizzle and clerk. This is personally my favourite tech stack and hence I created a template I can reuse for myself. Made it public so anyone can use it!

## What the does tech stack include?

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com/)
- [Drizzle](https://orm.drizzle.team/)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)


## How do I run this?

### Step 1

Run the following command to install all node modules, personally, I use `pnpm` but you may use any package manager you deem fit.

```bash
pnpm install
```

### Step 2
Create a .env file with the following env variables

```env
# Drizzle
DATABASE_URL="postgres://username:12345@localhost:5432/t3-drizzle-clerk"

#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=PUBLICKEY
CLERK_SECRET_KEY=SECRETKEY
```

### Step 3
Run the project using the following command, I have set it up in a way that the migrations will automatically run!
```bash
pnpm run dev
```