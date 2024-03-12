import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";

const db = sql("catches.db");

export async function getCatches() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM catches").all();
}

export function getCatch(slug) {
  return db.prepare("SELECT * FROM catches WHERE slug = ?").get(slug);
}

export async function saveCatch(fish) {
  fish.slug = slugify(Math.floor(Math.random() * 1000000).toString(), {
    lower: true,
  });

  const extension = fish.image.name.split(".").pop();
  const fileName = `${fish.species}${Math.floor(
    Math.random() * 1000000
  ).toString()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await fish.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  fish.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO catches
      (species, place, date, length, weight, image, slug, remarks)
    VALUES (
      @species,
      @place,
      @date,
      @length,
      @weight,
      @image,
      @slug,
      @remarks
    )
  `
  ).run(fish);
}
