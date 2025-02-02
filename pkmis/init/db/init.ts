/* eslint-disable no-console, no-process-exit */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const username = process.env.ADMIN_DEFAULT_USERNAME || "admin";
    const email = process.env.ADMIN_DEFAULT_EMAIL || "admin@demo.com";
    const password = process.env.ADMIN_DEFAULT_PASSWORD || "admin";

    const sql = `INSERT INTO users (name, email, password) VALUES ('${username}', '${email}', crypt('${password}', gen_salt('bf',10)))`;
    await prisma.$executeRawUnsafe(sql);
  } catch (e) {
    console.error(e);
    console.log(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

void main();
