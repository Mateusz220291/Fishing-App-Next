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
    remarks: "clear water, strong wind",
  },
  //   {
  //     title: "Spicy Curry",
  //     slug: "spicy-curry",
  //     image: "curry.jpg",
  //     summary:
  //       "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
  //     instructions: `
  //       1. Chop vegetables:
  //          Cut your choice of vegetables into bite-sized pieces.

  //       2. Sauté vegetables:
  //          In a pan with oil, sauté the vegetables until they start to soften.

  //       3. Add curry paste:
  //          Stir in 2 tablespoons of curry paste and cook for another minute.

  //       4. Simmer with coconut milk:
  //          Pour in 500ml of coconut milk and bring to a simmer. Let it cook for about 15 minutes.

  //       5. Serve:
  //          Enjoy this creamy curry with rice or bread.
  //     `,
  //     creator: "Max Schwarz",
  //     creator_email: "max@example.com",
  //   },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS catches (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       species TEXT NOT NULL,
       image TEXT NOT NULL,
       remarks TEXT NOT NULL,
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
