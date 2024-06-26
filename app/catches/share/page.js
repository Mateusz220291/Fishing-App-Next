"use client";

import { useFormState } from "react-dom";

import ImagePicker from "@/components/catches/image-picker";
import classes from "./page.module.css";
import { shareCatch } from "@/lib/actions";
import CatchFormSubmit from "@/components/catches/catch-form-submit";

export default function ShareCatchPage() {
  const [state, formAction] = useFormState(shareCatch, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>amazing catch</span>
        </h1>
        <p>Or any other fish you feel needs reporting!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="species">Species</label>
              <select id="species" name="species" required>
                <option value="">Choose your species</option>
                <option value="Pike">Pike</option>
                <option value="Zander">Zander</option>
                <option value="Perch">Perch</option>
                <option value="Catfish">Catfish</option>
                <option value="Taimen">Taimen</option>
              </select>
            </p>
            <p>
              <label htmlFor="place">Place of catch</label>
              <input type="text" id="place" name="place" required />
            </p>
          </div>
          <div className={classes.row}>
            <p>
              <label htmlFor="date">Date of catch</label>
              <input type="date" id="date" name="date" required />
            </p>
            <p>
              <label htmlFor="length">Length of fish (cm)</label>
              <input
                type="text"
                id="length"
                name="length"
                pattern="[0-9]+"
                title="Enter number"
                required
              />
            </p>
            <p>
              <label htmlFor="weight">Weight of fish (kg)</label>
              <input
                type="text"
                id="weight"
                name="weight"
                pattern="[0-9]+"
                title="Enter number"
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="remarks">
              Remarks (weather conditions, method of catch, lure)
            </label>
            <textarea id="remarks" name="remarks" rows="10" required></textarea>
          </p>
          <div className={classes.flex}>
            <input type="checkbox" id="released" name="released" />
            <label for="released">Fish was released</label>
          </div>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <CatchFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
