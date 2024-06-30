import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Japansese",
        imageSrc: "/jp-flag.svg",
      },

      {
        id: 2,
        title: "French",
        imageSrc: "/fr-flag.svg",
      },
      {
        id: 3,
        title: "Hindi",
        imageSrc: "/in-flag.svg",
      },
      {
        id: 4,
        title: "Tamil",
        imageSrc: "/in-flag.svg",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
