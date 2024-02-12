import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A huge pike logo" priority />
          FISHTRACKR APP
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/catches">Browse Catches</NavLink>
            </li>
            <li>
              <NavLink href="/fishpedia">Fishpedia</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
