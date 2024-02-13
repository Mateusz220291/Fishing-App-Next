"use client";

import { useFormStatus } from "react-dom";

export default function CatchFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Add catch"}
    </button>
  );
}
