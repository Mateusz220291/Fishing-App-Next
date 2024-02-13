"use client";

import { useFormState } from "react-dom";

// import ImagePicker from '@/components/meals/image-picker';
import classes from "./page.module.css";
// import { shareMeal } from '@/lib/actions';
import CatchFormSubmit from "@/components/catches/catch-form-submit";

export default function ShareMealPage() {
  // const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="species">Species</label>
              <select id="species" name="species" required>
                <option value="">Choose your species</option>
                <option value="pike">Pike</option>
                <option value="zander">Zander</option>
                <option value="perch">Perch</option>
                <option value="catfish">Catfish</option>
                <option value="taimen">Taimen</option>
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
          {/* <ImagePicker label="Your image" name="image" /> */}
          {/* {state.message && <p>{state.message}</p>} */}
          <p className={classes.actions}>
            <CatchFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
