import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteCard } from "../../redux/operation";
import { selectVisibleCard } from "../../redux/selectors";

export const ContactList = () => {
  const selectCard = useSelector(selectVisibleCard);
  const dispatch = useDispatch();
  const handleContactDelete = (contactId) => {
    dispatch(deleteCard(contactId));
  };

  return (
    <ul className={css.contactWrapper}>
      {selectCard.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.phone}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
