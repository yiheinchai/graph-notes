import { useEffect, useState, useRef, useLayoutEffect } from "react";
import React from "react";
import styles from "./ListText.module.css";
import { IoAddOutline } from "react-icons/io5";
import AddButton from "./ui/buttons/AddButton";
import { storeDatainLocalStorage } from "../App";

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

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (typeof props.modifyParentObject !== "function") return;
    console.log(props.textHierarchy, "mutation!");
    props.modifyParentObject((previous) => {
      const copyofParent = JSON.parse(JSON.stringify(props.parentObject));
      copyofParent.children[props.childIndex].text = textValue;
      console.log(copyofParent);
      return copyofParent;
    });
  }, [textValue]);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (props.textHierarchy === 0) {
    }
    if (typeof props.modifyParentObject !== "function") return;
    console.log(props.textHierarchy, "parent mutation!");
    console.log(parentObject);
    props.modifyParentObject((previous) => {
      const copyofParent = JSON.parse(JSON.stringify(props.parentObject));
      copyofParent.children[props.childIndex] = parentObject;
      if (props.textHierarchy === 1) {
        storeDatainLocalStorage(copyofParent);
      }
      return copyofParent;
    });
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
    <div className={!isLargeHeader(props.textHierarchy) && styles.container}>
      {props.textHierarchy === 1 && console.log(parentObject)}
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
            <input
              className={styles["text__input"]}
              onChange={(event) => {
                setTextValue(event.target.value);
              }}
              value={textValue}
            />
            {isLargeHeader(props.textHierarchy) && <AddButton onClickHandler={setShowContent} />}
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
