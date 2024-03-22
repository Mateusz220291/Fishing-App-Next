"use client";
import { useState } from "react";

import { deleteCatch } from "@/lib/actions";

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
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Czy na pewno chcesz usunąć tę rybę?</p>
            <button onClick={handleDelete}>Tak</button>
            <button onClick={closeModal}>Nie</button>
          </div>
        </div>
      )}
      <style jsx>{`
        /* Style dla modala */
        .modal {
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: #fefefe;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }

        button {
          margin-right: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default DeleteCatchBtn;
