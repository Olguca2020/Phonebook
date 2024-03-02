import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../../components/SearchBox/SearchBox";
import SectionContactForm from "../../components/SectionContactForm/SectionContactForm";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { selectError } from "../../redux/contacts/selectors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContactList } from "../../components/ContactList/ContactList";

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
        <SectionContactForm />

        <div className={css.wrapContacts}>
          <SearchBox />
          <ContactList />
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </HelmetProvider>
    </>
  );
}
