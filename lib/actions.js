"use server";
import { redirect } from "next/navigation";
import { saveCatch } from "./catches";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareCatch(prevState, formData) {
  const fish = {
    species: formData.get("species"),
    place: formData.get("place"),
    image: formData.get("image"),
    date: formData.get("date"),
    length: formData.get("length"),
    weight: formData.get("weight"),
    remarks: formData.get("remarks"),
  };
  if (
    isInvalidText(fish.species) ||
    isInvalidText(fish.place) ||
    isInvalidText(fish.date) ||
    isInvalidText(fish.length) ||
    isInvalidText(fish.weight) ||
    isInvalidText(fish.remarks) ||
    !fish.image ||
    fish.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  console.log(fish);
  await saveCatch(fish);
  revalidatePath("/catches");
  redirect("/catches");
}
