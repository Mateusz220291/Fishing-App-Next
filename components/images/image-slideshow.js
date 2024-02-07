"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import pikeImg from "@/assets/pike.jpg";
import perchImg from "@/assets/perch.jpg";
import catfishImg from "@/assets/catfish.jpg";
import taimenImg from "@/assets/taimen.jpg";
import zanderImg from "@/assets/zander.jpg";
import classes from "./image-slideshow.module.css";

const fishes = [
  { image: pikeImg, alt: "A monster pike" },
  { image: perchImg, alt: "Amazing perch" },
  { image: catfishImg, alt: "Huuuuge catfish" },
  { image: taimenImg, alt: "Strong taimen" },
  { image: zanderImg, alt: "Sharp teeth zander" },
];

export default function ImageSlideshow() {
  const [currentIndexImg, setCurrentIndexImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexImg((prevIndex) =>
        prevIndex < fishes.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {fishes.map((fish, index) => (
        <Image
          key={index}
          src={fish.image}
          className={index === currentIndexImg ? classes.active : ""}
          alt={fish.alt}
        />
      ))}
    </div>
  );
}
