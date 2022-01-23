import { IoAddOutline } from "react-icons/io5";
import styles from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button className={styles.button} onClick={() => props.onClickHandler((previous) => !previous)}>
      <IoAddOutline />
    </button>
  );
};

export default AddButton;
