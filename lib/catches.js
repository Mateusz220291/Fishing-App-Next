import sql from "better-sqlite3";

const db = sql("catches.db");

export async function getCatches() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM catches").all();
}
