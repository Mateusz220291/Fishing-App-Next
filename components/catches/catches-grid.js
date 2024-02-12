import CatchItem from "./catch-item";
import classes from "./catches-grid.module.css";

export default function CatchesGrid({ catches }) {
  return (
    <ul className={classes.catches}>
      {catches.map((fish) => (
        <li key={fish.id}>
          <CatchItem {...fish} />
        </li>
      ))}
    </ul>
  );
}
