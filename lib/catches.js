import sql from "better-sqlite3";

const db = sql("catches.db");

export async function getCatches() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM catches").all();
}

export function getCatch(slug) {
  return db.prepare("SELECT * FROM catches WHERE slug = ?").get(slug);
}
