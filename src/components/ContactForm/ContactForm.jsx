import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../redux/selectors";
import { addCard } from "../../redux/operation";
import { toast } from "react-hot-toast";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const allCards = useSelector(selectCards);

  const handleSubmit = (values, actions) => {
    const isCardExist = allCards.some((card) => card.name === values.name);
    if (isCardExist) {
      toast.error("Contact with this name already exists.", {
        position: "top-right",
      });
      actions.resetForm();
    } else {
      const newContact = {
        id: values.id,
        name: values.name,
        number: values.number,
      };

      dispatch(addCard(newContact));
      actions.resetForm();
    }
  };
  const initialValues = { id: "", name: "", number: "" };
  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <div className="inputBox">
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formField}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className="inputBox">
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formField}
            id={numberFieldId}
            type="text"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
