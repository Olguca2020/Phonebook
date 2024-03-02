import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectVisibleCard } from "../../redux/selectors";
import { deleteCard } from "../../redux/handleCards/operation";

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
