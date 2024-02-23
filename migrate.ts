import postgres from "postgres";
import { env } from "~/env.js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";

const migrationClient = postgres(env.DATABASE_URL, { max: 1 });

const main = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/server/db/migrations",
  })
    .then((res) => {
      console.log("Migration ran ==> ", res);
      return res;
    })
    .catch((err) => {
      console.log("Migration failed ==> ", err);
      return err as Error;
    })
    .finally(() => process.exit(0));
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();