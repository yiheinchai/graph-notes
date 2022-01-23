import { useState } from "react";
import styles from "./ListText.module.css";
import { IoAddOutline } from "react-icons/io5";
import AddButton from "./ui/buttons/AddButton";

const ListText = (props) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexFlow: props.mindMapMode ? "row" : "column",
          alignItems: props.mindMapMode && "center",
          marginBottom: props.mindMapMode && "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            gap: "0.3rem",
            backgroundColor: "white",
            border: "1px solid #EAECF1",
            borderRadius: "2rem",
            padding: "0.5rem",
          }}
        >
          <div style={{ whiteSpace: "nowrap", marginLeft: !props.expandable && "1.5rem" }}>
            {props.text}
          </div>
          {props.expandable && (
            // <button
            //   style={{ height: "1.2rem" }}
            //   onClick={() => setShowContent((previous) => !previous)}
            // >
            //   <IoAddOutline />
            // </button>
            <AddButton onClickHandler={setShowContent} />
          )}
        </div>
        {showContent && <div style={{ display: "flex", flexFlow: "column" }}>{props.children}</div>}
      </div>
    </div>
  );
};

export default ListText;
