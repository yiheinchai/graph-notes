import styles from "./NavigationButton.module.css";

const NavigationButton = (props) => {
  return <div className={styles.button}>{props.children}</div>;
};

export default NavigationButton;
