import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
export const Contact = ({ name, number, onButtonClick }) => {
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
    </div>
  );
};
