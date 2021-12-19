import { useState } from "react";
import styles from "./ListText.module.css";

const ListText = (props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flexFlow: "row", marginBottom: "2rem" }}>
        <div style={{ display: "flex", flexFlow: "row" }}>
          {props.expandable && (
            <button
              style={{ height: "2rem" }}
              onClick={() => setShowContent((previous) => !previous)}
            >
              O
            </button>
          )}
          <div style={{ marginLeft: !props.expandable && "1.5rem" }}>{props.text}</div>
        </div>
        {showContent && <div style={{ display: "flex", flexFlow: "column" }}>{props.children}</div>}
      </div>
    </div>
  );
};

export default ListText;
