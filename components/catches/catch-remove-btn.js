"use client";
import { useState } from "react";

import { deleteCatch } from "@/lib/actions";
import classes from "./catch-remove-btn.module.css";

const DeleteCatchBtn = ({ slug }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleDelete = async () => {
    try {
      await deleteCatch(slug);
      closeModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button onClick={openModal}>Remove</button>
      {isOpen && (
        <div className={classes.modal}>
          <div className={classes.content}>
            <span className={classes.close} onClick={closeModal}>
              &times;
            </span>
            <p>Are you sure you want to delete this fish?</p>
            <div>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCatchBtn;
