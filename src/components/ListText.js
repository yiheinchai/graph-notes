import React, { useEffect, useState } from "react";
import { storeDatainLocalStorage } from "../App";
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

const ListText = (props) => {
  const [showContent, setShowContent] = useState(false);
  const [textValue, setTextValue] = useState(props.text);
  const [parentObject, setParentObject] = useState(props.object);

  // useEffect(() => {
  //   props.modifyParentObject((previous) => {
  //     const copyofParent = JSON.parse(JSON.stringify(previous));
  //     copyofParent.children[props.childIndex].text = textValue;
  //     return copyofParent;
  //   });
  // }, textValue);

  useEffect(() => {
    // debouncing updates to prevent lags
    const timeoutId = setTimeout(() => {
      if (typeof props.modifyParentObject !== "function") {
        console.log("name:", props.text, "handler not a function!", props.hierarchyLevel);
        return;
      }

      if (props.hierarchyLevel === 0) {
        const copyofObject = JSON.parse(JSON.stringify(props.object));
        copyofObject.text = textValue;
        props.modifyParentObject(copyofObject);
        return;
      }

      if (props.hierarchyLevel > 0) {
        const copyofParent = JSON.parse(JSON.stringify(props.parentObject));
        copyofParent.children[props.childIndex || 0].text = textValue;
        console.log("name:", props.text, copyofParent, "mutation!", props.hierarchyLevel);
        props.modifyParentObject(copyofParent);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [textValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof props.modifyParentObject !== "function") {
        console.log("name:", props.text, "handler not a function!", props.hierarchyLevel);
        return;
      }
      console.log(
        "name:",
        props.text,
        parentObject,
        "parent mutations",
        props.hierarchyLevel,
        "child index",
        props.childIndex
      );

      if (props.hierarchyLevel === 0) {
        console.log(props.hierarchyLevel);
        props.modifyParentObject(parentObject);
        console.log(props.modifyParentObject);
        return;
      }
      if (props.hierarchyLevel > 0) {
        const copyofParent = JSON.parse(JSON.stringify(props.parentObject));
        copyofParent.children[props.childIndex] = parentObject;
        // if (props.hierarchyLevel === 1) {
        //   storeDatainLocalStorage(copyofParent);
        // }
        props.modifyParentObject(copyofParent);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [parentObject]);

  // Guard to prevent rendering text with no length
  if (props.text.trim().length === 0) return <></>;

  const childrenWithProps = React.Children.map(props.children, (child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { modifyParentObject: setParentObject, childIndex: index });
    }
    return child;
  });

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
            <input
              className={styles["text__input"]}
              onChange={(event) => {
                setTextValue(event.target.value);
              }}
              value={textValue}
            />
            {isLargeHeader(props.hierarchyLevel) && <AddButton onClickHandler={setShowContent} />}
          </div>
        </div>
        {showContent && (
          <div style={{ display: "flex", flexFlow: "column" }}>{childrenWithProps}</div>
        )}
      </div>
    </div>
  );
};

export default ListText;
