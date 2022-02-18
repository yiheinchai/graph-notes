import { useState } from "react";
import styles from "./ListText.module.css";
import { IoAddOutline } from "react-icons/io5";
import AddButton from "./ui/buttons/AddButton";

function getTextStyles(textHierarchy) {
  if (textHierarchy === 1) return styles["text__hierarchy_1"];
  if (textHierarchy === 2) return styles["text__hierarchy_2"];
  if (textHierarchy === 3) return styles["text__hierarchy_3"];
}
function getTextCardStyles(textHierarchy) {
  if (textHierarchy === 1) return styles["text__card__hierarchy_1"];
  if (textHierarchy === 2) return styles["text__card__hierarchy_2"];
  if (textHierarchy === 3) return styles["text__card__hierarchy_3"];
}

function isLargeHeader(textHierarchy) {
  if (textHierarchy < 4) return true;
}

const ListText = (props) => {
  const [showContent, setShowContent] = useState(props.expandable ? true : false);
  // Guard to prevent rendering text with no length
  if (props.text.trim().length === 0) return <></>;

  return (
    <div className={!isLargeHeader(props.textHierarchy) && styles.container}>
      {!isLargeHeader(props.textHierarchy) && (
        <div className={styles["document__toggle"]}>
          <div
            className={styles["icon__wrapper"]}
            onClick={() => setShowContent((previous) => !previous)}
          >
            <svg
              viewBox="0 0 100 100"
              className={`${styles["document__toggle_icon"]} ${
                showContent ? styles["toggle__open"] : styles["toggle__closed"]
              }`}
            >
              <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
            </svg>
          </div>
        </div>
      )}

      <div
        className={
          props.mindMapMode ? styles["text__wrapper_mindmap"] : styles["text__wrapper_document"]
        }
      >
        <div
          className={`${
            props.mindMapMode ? styles["text__card_mindmap"] : styles["text__card_document"]
          } ${getTextCardStyles(props.textHierarchy)}`}
        >
          <div
            className={`${props.mindMapMode ? styles["text_mindmap"] : styles["text_document"]} ${
              props.expandable && styles["text_expandable"]
            } ${!props.mindMapMode && getTextStyles(props.textHierarchy)}
            `}
          >
            {props.text}
            {isLargeHeader(props.textHierarchy) && <AddButton onClickHandler={setShowContent} />}
          </div>
        </div>
        {showContent && <div style={{ display: "flex", flexFlow: "column" }}>{props.children}</div>}
      </div>
    </div>
  );
};

export default ListText;
