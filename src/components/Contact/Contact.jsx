import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { ModalWindow } from "../Modal/Modal";
import { useState } from "react";

export const Contact = ({ name, number, contactId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const onButtonClick = () => {
    openModal();
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactBox}>
        <p className={css.title}>
          <IoPerson />
          {name}
        </p>
        <p className={css.title}>
          <FaPhone />
          {number}
        </p>
      </div>

      <button type="button" onClick={onButtonClick} className={css.deleteBtn}>
        Delete
      </button>
      <ModalWindow
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contactId={contactId}
      />
    </div>
  );
};
