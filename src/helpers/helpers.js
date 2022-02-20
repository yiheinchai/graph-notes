import ListText from "../components/ListText";

export const objectExtractor = (object, mindMapMode) => {
  if (object.hierarchyLevel < 1) {
    console.log("root text", object.text, object.hierarchyLevel);
    return (
      <ListText
        mindMapMode={mindMapMode}
        expandable={true}
        text={object.text}
        object={object}
        hierarchyLevel={object.hierarchyLevel}
      >
        {object.children.map((child) => {
          return objectExtractor(child, mindMapMode);
        })}
      </ListText>
    );
  }
  if (object?.children?.length === 0 || !object?.children?.length)
    return (
      <ListText
        mindMapMode={mindMapMode}
        expandable={false}
        text={object.text}
        object={object}
        hierarchyLevel={object.hierarchyLevel}
      />
    );
  return (
    <ListText
      mindMapMode={mindMapMode}
      expandable={true}
      text={object.text}
      object={object}
      hierarchyLevel={object.hierarchyLevel}
    >
      {object.children.map((child) => {
        return objectExtractor(child, mindMapMode);
      })}
    </ListText>
  );
};

export function extractTextNodes(currentElement) {
  const childNodes = Array.from(currentElement.childNodes);
  return childNodes.reduce((textString, node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return textString + " " + node.nodeValue;
    } else if (node.localName === "a") {
      // some headers are rendered as an 'a' tag in a h2 tag
      return textString + " " + node.text;
    } else return textString;
  }, "");
}

export function storeDatainLocalStorage(data) {
  localStorage.setItem("storedNotes", JSON.stringify(data));
}

export function insertSibilingInLatestAndDeepestDepths(
  object,
  dataToBeInserted,
  previousIndex = ""
) {
  if (object.children[object.children.length - 1].children.length === 0) {
    const currentLevelIndex = object.children.length - 1 + 1; // get index of latest child and add one for the new insertion
    const newIndex = previousIndex + currentLevelIndex.toString().padStart(2, "0");
    return insertChildren(object, { ...dataToBeInserted, index: newIndex });
  } else {
    const currentLevelIndex = object.children.length - 1;
    const newIndex = previousIndex + currentLevelIndex.toString().padStart(2, "0");
    return insertSibilingInLatestAndDeepestDepths(
      object.children[object.children.length - 1],
      dataToBeInserted,
      newIndex
    );
  }
}

export function insertChildInLatestAndDeepestDepths(object, dataToBeInserted, previousIndex = "") {
  if (object.children.length === 0) {
    return insertChildren(object, { ...dataToBeInserted, index: previousIndex + "00" });
  } else {
    const currentLevelIndex = object.children.length - 1;
    const newIndex = previousIndex + currentLevelIndex.toString().padStart(2, "0");
    return insertChildInLatestAndDeepestDepths(
      object.children[object.children.length - 1],
      dataToBeInserted,
      newIndex
    );
  }
}
export function insertChildAtSpecifiedDepth(object, dataToBeInserted, depth) {
  if (depth === 0) {
    return insertChildren(object, dataToBeInserted);
  } else {
    return insertChildAtSpecifiedDepth(
      object.children[object.children.length - 1],
      dataToBeInserted,
      depth - 1
    );
  }
}
export function insertSibilingAtSpecifiedDepth(
  object,
  dataToBeInserted,
  depth,
  previousIndex = ""
) {
  if (depth === 1) {
    const currentLevelIndex = object.children.length - 1 + 1;
    const newIndex = previousIndex + currentLevelIndex.toString().padStart(2, "0");
    return insertChildren(object, { ...dataToBeInserted, index: newIndex });
  } else {
    const currentLevelIndex = object.children.length - 1;
    const newIndex = previousIndex + currentLevelIndex.toString().padStart(2, "0");
    return insertSibilingAtSpecifiedDepth(
      object.children[object.children.length - 1],
      dataToBeInserted,
      depth - 1,
      newIndex
    );
  }
}

// Access the last correct node and append another chlid
export function insertChildren(object, dataToBeInserted) {
  object.children.push(dataToBeInserted);
  return object;
}
