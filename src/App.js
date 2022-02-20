import { useCallback, useEffect, useMemo, useState } from "react";
import ListText from "./components/ListText";
import "./App.css";
import FileUploader from "./components/FileUploader";
import ListRenderer from "./components/ui/buttons/ListRenderer";

function extractTextNodes(currentElement) {
  const childNodes = Array.from(currentElement.childNodes);
  return childNodes.reduce((textString, node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return textString + " " + node.nodeValue;
    } else return textString;
  }, "");
}

export function storeDatainLocalStorage(data) {
  localStorage.setItem("storedNotes", JSON.stringify(data));
}

function insertSibilingInLatestAndDeepestDepths(object, data) {
  if (object.children[object.children.length - 1].children.length === 0) {
    return insertChildren(object, data);
  } else {
    return insertSibilingInLatestAndDeepestDepths(
      object.children[object.children.length - 1],
      data
    );
  }
}

function insertChildInLatestAndDeepestDepths(object, data) {
  if (object.children.length === 0) {
    return insertChildren(object, data);
  } else {
    return insertChildInLatestAndDeepestDepths(object.children[object.children.length - 1], data);
  }
}
function insertChildAtSpecifiedDepth(object, data, depth) {
  if (depth === 0) {
    return insertChildren(object, data);
  } else {
    return insertChildAtSpecifiedDepth(
      object.children[object.children.length - 1],
      data,
      depth - 1
    );
  }
}
function insertSibilingAtSpecifiedDepth(object, data, depth) {
  if (depth === 1) {
    return insertChildren(object, data);
  } else {
    return insertSibilingAtSpecifiedDepth(
      object.children[object.children.length - 1],
      data,
      depth - 1
    );
  }
}

// Access the last correct node and append another chlid
function insertChildren(object, data) {
  object.children.push(data);
  return object;
}

const App = () => {
  const [mindMapMode, setMindMapMode] = useState(false);
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState();
  const [fileJSON, setFileJSON] = useState();

  useEffect(() => {
    const storedNotes = localStorage.getItem("storedNotes");
    if (storedNotes) {
      setFileJSON(JSON.parse(storedNotes));
    }
  }, []);
  useEffect(() => {
    console.log("newfileJSON set!", fileJSON);
    if (fileJSON) {
      storeDatainLocalStorage(fileJSON);
    }
  }, [fileJSON]);

  const setFileJSONCallback = useCallback((value) => setFileJSON(value));
  const fileJSONMemoized = useMemo(() => fileJSON, [fileJSON]);

  const htmlProcessor = () => {
    const elementHierarchy = {
      h1: 1,
      h2: 2,
      h3: 3,
      p: {
        "": 4,
        "72pt": 5,
        "108pt": 6,
        "144pt": 7,
        "180pt": 8,
        "216pt": 9,
        "254pt": 10,
        "290pt": 11,
      },
    };

    const uploaded = document.querySelector("#uploadedDocument");
    const elements = uploaded.querySelectorAll(".WordSection1 > *");
    const elementArray = [...elements];

    const output = elementArray.reduce(
      (previous, current, index, array) => {
        if (current.localName === "h1") {
          insertChildren(previous[1], {
            text: current.textContent,
            hierarchyLevel: 1,
            children: [],
          });
          return [1, previous[1]];
        }
        if (index > 0 && array[index - 1].localName) {
          if (
            current.localName != "p" &&
            current.localName != "h1" &&
            current.localName != "h2" &&
            current.localName != "h3"
          ) {
            return previous;
          }
          let currentHierarchy;
          if (current.localName === "p") {
            // prevent generating node for empty strings
            if (extractTextNodes(current).trim().length === 0) {
              return previous;
            }
            currentHierarchy = elementHierarchy[current.localName][current.style.marginLeft];
          } else {
            currentHierarchy = elementHierarchy[current.localName];
          }
          if (previous[0] === currentHierarchy) {
            insertSibilingInLatestAndDeepestDepths(previous[1], {
              text: extractTextNodes(current)
                .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", ""),
              hierarchyLevel: currentHierarchy,
              children: [],
            });
          } else if (previous[0] > currentHierarchy) {
            insertSibilingAtSpecifiedDepth(
              previous[1],
              {
                text: extractTextNodes(current)
                  .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", ""),
                hierarchyLevel: currentHierarchy,
                children: [],
              },
              currentHierarchy
            );
          } else if (previous[0] < currentHierarchy) {
            insertChildInLatestAndDeepestDepths(previous[1], {
              text: extractTextNodes(current)
                .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", ""),
              hierarchyLevel: currentHierarchy,
              children: [],
            });
          }
          return [currentHierarchy, previous[1]];
        }
        return previous;
      },
      [-1, { text: "Circulation and Breathing", hierarchyLevel: 0, children: [] }]
    );

    setFileJSONCallback(output[1]);
  };

  const processFile = () => {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setFileData(e.target.result);
    };
    fileReader.readAsText(file);
  };

  const objectExtractor = (object, parentObject, mindMapMode) => {
    if (object.hierarchyLevel < 1) {
      console.log("root text", object.text, object.hierarchyLevel);
      return (
        <ListText
          mindMapMode={mindMapMode}
          expandable={true}
          text={object.text}
          object={object}
          parentObject={parentObject ? parentObject : object}
          hierarchyLevel={object.hierarchyLevel}
          modifyParentObject={setFileJSON}
        >
          {object.children.map((child) => {
            return objectExtractor(child, object, mindMapMode);
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
          parentObject={parentObject ? parentObject : object}
          hierarchyLevel={object.hierarchyLevel}
        />
      );
    return (
      <ListText
        mindMapMode={mindMapMode}
        expandable={true}
        text={object.text}
        object={object}
        parentObject={parentObject ? parentObject : object}
        hierarchyLevel={object.hierarchyLevel}
      >
        {object.children.map((child) => {
          return objectExtractor(child, object, mindMapMode);
        })}
      </ListText>
    );
  };

  return (
    <div>
      <h3>Notes</h3>
      <FileUploader submitHandler={setFile} />
      <button onClick={htmlProcessor}>Click to process</button>
      <button
        onClick={() => {
          storeDatainLocalStorage(fileJSONMemoized);
        }}
      >
        Store Data in LocalStorage
      </button>
      <button onClick={() => setMindMapMode((previous) => !previous)}>Toggle Mindmap Mode</button>
      {file && processFile()}
      <div>{file && file.name}</div>
      {fileJSON && objectExtractor(fileJSON, mindMapMode)}
      {/* {fileJSONMemoized && (
        <ListRenderer
          child={fileJSONMemoized}
          object={fileJSONMemoized}
          mindMapMode={mindMapMode}
        />
      )} */}
      <div
        id="uploadedDocument"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: fileData }}
      ></div>
    </div>
  );
};

export default App;
