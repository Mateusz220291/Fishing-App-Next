import Link from "next/link";
import Image from "next/image";

import classes from "./catch-item.module.css";
import DeleteCatchBtn from "./catch-remove-btn";
import "../../public/images/released.png";

export default function CatchItem({
  species,
  slug,
  image,
  length,
  date,
  weight,
  released,
}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={species} fill />
        </div>
        <div className={classes.headerText}>
          <div>
            <h2>{species}</h2>
            {released && (
              <Image
                src="/images/released.png"
                alt="released"
                width={25}
                height={25}
              />
            )}
          </div>
          <p>weight: {weight} kg</p>
          <p>length: {length} cm</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>Date: {date}</p>
        <div className={classes.actions}>
          <DeleteCatchBtn key={slug} slug={slug}></DeleteCatchBtn>
          <Link href={`/catches/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
