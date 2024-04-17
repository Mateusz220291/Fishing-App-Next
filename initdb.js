const sql = require("better-sqlite3");
const db = sql("catches.db");

const dummyCatches = [
  {
    species: "Pike",
    slug: "21-03-2023-1",
    image: "/images/pike.jpg",
    length: "100",
    date: "21-03-2023",
    weight: "8",
    place: "Vistula River",
    released: null,
    remarks: "clear water, strong wind",
  },
  {
    species: "Zander",
    slug: "21-03-2023-2",
    image: "/images/zander.jpg",
    length: "100",
    date: "21-03-2023",
    weight: "8",
    place: "Vistula River",
    released: "on",
    remarks: "clear water, strong wind",
  },
  {
    species: "Catfish",
    slug: "21-03-2023-3",
    image: "/images/catfish.jpg",
    length: "100",
    date: "21-03-2023",
    weight: "8",
    place: "Vistula River",
    released: null,
    remarks: "clear water, strong wind",
  },
  {
    species: "Perch",
    slug: "21-03-2023-4",
    image: "/images/perch.jpg",
    length: "100",
    date: "21-03-2023",
    weight: "8",
    place: "Vistula River",
    released: "on",
    remarks: "clear water, strong wind",
  },
  {
    species: "Taimen",
    slug: "21-03-2023-5",
    image: "/images/taimen.jpg",
    length: "100",
    date: "21-03-2023",
    weight: "8",
    place: "Vistula River",
    released: null,
    remarks: "clear water, strong wind",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS catches (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       species TEXT NOT NULL,
       image TEXT NOT NULL,
       remarks TEXT NOT NULL,
       released,
       place TEXT NOT NULL,
       date TEXT NOT NULL,
       weight TEXT NOT NULL,
       length TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO catches VALUES (
         null,
         @slug,
         @species,
         @image,
         @remarks,
         @released,
         @place,
         @date,
         @weight,
         @length
      )
   `);

  for (const fish of dummyCatches) {
    stmt.run(fish);
  }
}

initData();
