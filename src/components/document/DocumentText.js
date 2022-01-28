import { useState } from "react";
import AddButton from "../ui/buttons/AddButton";
import styles from "./DocumentText.module.css";

const DocumentText = (props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: props.mindMapMode && "flex",
          marginBottom: props.mindMapMode && "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexFlow: "row",
            gap: "0.3rem",
            marginTop: `${4 - 0.4 * props.headerNumber}rem`,
          }}
        >
          {props.expandable && (
            // <button
            //   style={{ height: "1.2rem" }}
            //   onClick={() => setShowContent((previous) => !previous)}
            // >
            //   <IoAddOutline />
            // </button>
            <AddButton onClickHandler={setShowContent} />
          )}
          <div
            style={{
              fontSize: `${2 - 0.1 * props.headerNumber}rem`,
              whiteSpace: "nowrap",
              marginLeft: !props.expandable && "1.5rem",
              fontWeight: Number(10 - props.headerNumber) * 100,
            }}
          >
            {props.text}
          </div>
        </div>
        {showContent && <div style={{ display: "flex", flexFlow: "column" }}>{props.children}</div>}
      </div>
    </div>
  );
};

export default DocumentText;
