import Image from "next/image";
import { notFound } from "next/navigation";

import { getCatch } from "@/lib/catches";
import classes from "./page.module.css";

// export async function generateMetadata({ params }) {
//   const fish = getCatch(params.catchSlug);

//   if (!fish) {
//     notFound();
//   }

//   return {
//     title: fish.title,
//     description: fish.summary,
//   };
// }

export default function CatchDetailsPage({ params }) {
  const fish = getCatch(params.catchSlug);

  if (!fish) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={fish.image} alt={fish.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{fish.title}</h1>
          <p className={classes.summary}>Weight of fish: {fish.weight} kg</p>
          <p className={classes.summary}>Length of fish: {fish.length} cm</p>
          <p className={classes.summary}>date of catch: {fish.date} </p>
          <p className={classes.summary}>place of catch: {fish.place}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions}> Remarks: {fish.remarks}</p>
      </main>
    </>
  );
}
