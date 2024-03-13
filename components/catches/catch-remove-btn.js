"use client";

import { deleteCatch } from "@/lib/actions";

const DeleteCatchBtn = ({ slug }) => {
  console.log(slug);
  const handleDelete = async () => {
    try {
      await deleteCatch(slug);
    } catch (error) {
      console.error(error.message);
    }
  };

  return <button onClick={handleDelete}>Remove</button>;
};

export default DeleteCatchBtn;
