import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationButton from "../ui/buttons/NavigationButton";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["header"]}>Graph Notes</h1>
      <p className={styles["subheader"]}>by Yi Hein Builds</p>
      <div className={styles["notes__wrapper"]}>
        <Link to="/graph-notes/document/cnb">
          <NavigationButton>Circulation and Breathing</NavigationButton>
        </Link>
        <Link to="/graph-notes/document/ind">
          <NavigationButton>Infection and Defence</NavigationButton>
        </Link>
        <Link to="/graph-notes/document/fhmp">
          <NavigationButton>FHMP</NavigationButton>
        </Link>
        {Object.keys(localStorage)
          .filter((key) => key !== "fhmp" && key !== "ind" && key !== "cnb")
          .map((key) => {
            const title = JSON.parse(localStorage.getItem(key)).text;
            return (
              <div style={{ position: "relative" }}>
                <Link to={`/graph-notes/document/${key}`}>
                  <NavigationButton>{title}</NavigationButton>
                </Link>
                <div
                  onClick={() => localStorage.removeItem(key)}
                  style={{
                    position: "absolute",
                    right: "-3rem",
                    bottom: "1.3rem",
                    cursor: "pointer",
                  }}
                >
                  <IoTrashBin style={{ color: "#a1a1aa" }} />
                </div>
              </div>
            );
          })}
        <Link to="/graph-notes/document/new">
          <NavigationButton>Add your own notes</NavigationButton>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
