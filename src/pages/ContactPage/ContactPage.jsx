import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { fetchCards } from "../../redux/operation";
import { selectError, selectLoading } from "../../redux/selectors";
import { ContactForm } from "../ContactForm/ContactForm";
import { MyLoader } from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (error && !hasErrorOccurred) {
      toast.error("Waiting please...");
      setHasErrorOccurred(true);
    }
  }, [error, hasErrorOccurred]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>PhoneBook</title>
        </Helmet>
        <ContactForm />
        <SearchBox />

        {isLoading && <MyLoader />}
        <ContactList />
        <Toaster />
      </HelmetProvider>
    </>
  );
}
