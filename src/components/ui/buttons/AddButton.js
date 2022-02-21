import { IoAddOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button className={styles.button} onClick={() => props.onClickHandler((previous) => !previous)}>
      {!props.showContent ? <IoEyeOffOutline /> : <IoEyeOutline />}
    </button>
  );
};

export default AddButton;
