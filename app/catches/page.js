import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import CatchesGrid from "@/components/catches/catches-grid";
import { getCatches } from "@/lib/catches";

export const metadata = {
  title: "All Catches",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Catches() {
  console.log("Fetching meals");
  const catches = await getCatches();

  return <CatchesGrid catches={catches} />;
}

export default function CatchesPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Fish caught <span className={classes.highlight}>by you</span>
        </h1>
        <p>Select a specific catch and check its detailed information.</p>
        <p className={classes.cta}>
          <Link href="/catches/share">Share Your New Catch</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching catches...</p>}
        >
          <Catches />
        </Suspense>
      </main>
    </>
  );
}
