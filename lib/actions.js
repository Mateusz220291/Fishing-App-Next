"use server";
import { redirect } from "next/navigation";
import { saveCatch } from "./catches";

export async function shareCatch(formData) {
  const fish = {
    species: formData.get("species"),
    place: formData.get("place"),
    image: formData.get("image"),
    date: formData.get("date"),
    length: formData.get("length"),
    weight: formData.get("weight"),
    remarks: formData.get("remarks"),
  };

  await saveCatch(fish);
  redirect("/catches");
}
