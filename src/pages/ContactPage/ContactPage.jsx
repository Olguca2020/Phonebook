import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import toast, { Toaster } from "react-hot-toast";

import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";
import { fetchCards } from "../../redux/handleCards/operation";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { MyLoader } from "../../components/Loader/Loader";

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
      <title>PhoneBook</title>

      <ContactForm />
      <SearchBox />

      {isLoading && <MyLoader />}
      <ContactList />
      <Toaster />
    </>
  );
}
