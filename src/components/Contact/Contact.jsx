import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.telNumber}>
          <BsTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
