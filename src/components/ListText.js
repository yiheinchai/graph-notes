import React, { useCallback, useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useParams } from "react-router-dom";
import styles from "./ListText.module.css";
import AddButton from "./ui/buttons/AddButton";
function getTextStyles(hierarchyLevel) {
  if (hierarchyLevel === 0) return styles["text__hierarchy_0"];
  if (hierarchyLevel === 1) return styles["text__hierarchy_1"];
  if (hierarchyLevel === 2) return styles["text__hierarchy_2"];
  if (hierarchyLevel === 3) return styles["text__hierarchy_3"];
}
function getTextCardStyles(hierarchyLevel) {
  if (hierarchyLevel === 1) return styles["text__card__hierarchy_1"];
  if (hierarchyLevel === 2) return styles["text__card__hierarchy_2"];
  if (hierarchyLevel === 3) return styles["text__card__hierarchy_3"];
}

function isLargeHeader(hierarchyLevel) {
  if (hierarchyLevel < 4) return true;
}

function modifyObjectAtID(object, id, dataToUpdate) {
  const currentId = parseInt(id.slice(0, 2));
  console.log("current:", currentId, "total: ", id);
  if (id.length === 2) {
    return updateText(object, currentId, dataToUpdate);
  } else {
    const newId = id.slice(2);
    modifyObjectAtID(object.children[currentId], newId, dataToUpdate);
    return object;
  }
}

function updateText(object, id, dataToUpdate) {
  object.children[id].text = dataToUpdate;
  return object;
}

const ListText = (props) => {
  const [showContent, setShowContent] = useState(
    props.expandable ? props.hierarchyLevel !== 2 : false
  );
  const [textValue, setTextValue] = useState(props.text);
  const contentEditRef = useRef();
  let params = useParams();

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const debouncingTimeout = setTimeout(() => {
      console.log("Setting index");
      if (!props.object?.index) return;
      const notes = JSON.parse(localStorage.getItem(params.documentId));
      localStorage.setItem(
        params.documentId,
        JSON.stringify(modifyObjectAtID(notes, props.object.index, textValue))
      );
    }, 2000);

    return () => clearTimeout(debouncingTimeout);
  }, [textValue]);

  // Guard to prevent rendering text with no length
  if (props.text.trim().length === 0) return <></>;

  return (
    <div className={!isLargeHeader(props.hierarchyLevel) ? styles.container : ""}>
      {!isLargeHeader(props.hierarchyLevel) && (
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
          } ${getTextCardStyles(props.hierarchyLevel)}`}
        >
          <div
            className={`${props.mindMapMode ? styles["text_mindmap"] : styles["text_document"]} ${
              props.expandable && styles["text_expandable"]
            } ${!props.mindMapMode && getTextStyles(props.hierarchyLevel)}
            `}
          >
            {isLargeHeader(props.hierarchyLevel) && (
              <AddButton showContent={showContent} onClickHandler={setShowContent} />
            )}
            <ContentEditable
              html={textValue}
              className={styles["text__input"]}
              innerRef={contentEditRef}
              onChange={(event) => {
                setTextValue(event.target.value);
              }}
            />
          </div>
        </div>
        {showContent && <div style={{ display: "flex", flexFlow: "column" }}>{props.children}</div>}
      </div>
    </div>
  );
};

export default React.memo(ListText);
