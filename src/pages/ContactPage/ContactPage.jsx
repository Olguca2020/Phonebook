import css from "./ContactPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectError } from "../../redux/contacts/selectors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { MyLoader } from "../../components/Loader/Loader";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>PhoneBook</title>
        </Helmet>
        <ContactForm />

        <div className={css.wrapContacts}>
          <SearchBox />
          <ContactList />
          {isLoading && <MyLoader />}
          {error && <ErrorMessage />}
        </div>
      </HelmetProvider>
    </>
  );
}
