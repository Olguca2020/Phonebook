import { useId } from "react";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { checkFilter } from "../../redux/filtersSlice";
import { selectStatusFilter } from "../../redux/selectors";

export const SearchBox = () => {
  const id = useId();
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(checkFilter(value));
  };
  return (
    <>
      <label htmlFor={id}>Finde contacts by name</label>
      <input
        id={id}
        className={css.inputField}
        value={filter}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};
