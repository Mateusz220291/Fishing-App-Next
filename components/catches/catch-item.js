import Link from "next/link";
import Image from "next/image";

import classes from "./catch-item.module.css";

export default function CatchItem({
  species,
  slug,
  image,
  length,
  date,
  weight,
  place,
  remarks,
}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={species} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{species}</h2>
          <p>weight: {weight} kg</p>
          <p>length: {length} cm</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>Date: {date}</p>
        <div className={classes.actions}>
          <button>REMOVE</button>
          <Link href={`/catches/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
