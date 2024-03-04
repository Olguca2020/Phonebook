import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { deleteCard } from "../../redux/handleCards/operation";
import { selectVisibleCard } from "../../redux/auth/selectors";

export const ContactList = () => {
  const selectCard = useSelector(selectVisibleCard);
  const dispatch = useDispatch();
  const handleContactDelete = (contactId) => {
    dispatch(deleteCard(contactId));
    toast.success("Contact deleted successfully!");
  };

  return (
    <ul className={css.contactWrapper}>
      {selectCard.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
