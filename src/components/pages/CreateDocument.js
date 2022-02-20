import { useCallback, useEffect, useMemo, useState } from "react";
import {
  extractTextNodes,
  insertChildInLatestAndDeepestDepths,
  insertChildren,
  insertSibilingAtSpecifiedDepth,
  insertSibilingInLatestAndDeepestDepths,
  objectExtractor,
  storeDatainLocalStorage,
} from "../../helpers/helpers";
import FileUploader from "../FileUploader";

const CreateDocument = () => {
  const [mindMapMode, setMindMapMode] = useState(false);
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState();
  const [fileJSON, setFileJSON] = useState();
  const [fileName, setFileName] = useState();
  const [fileId, setFileId] = useState();

  useEffect(() => {
    const storedNotes = localStorage.getItem("storedNotes");
    if (storedNotes) {
      setFileJSON(JSON.parse(storedNotes));
    }
  }, []);
  useEffect(() => {
    if (fileJSON && fileId) {
      localStorage.setItem(fileId, JSON.stringify(fileJSON));
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
          // guard to prevent images and tables from being added to object
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
            console.log(current.localName, extractTextNodes(current));
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
      [-1, { text: fileName || "User Notes", hierarchyLevel: 0, children: [] }]
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

  return (
    <div style={{ display: "flex", flexFlow: "row", justifyContent: "center" }}>
      <div style={{ maxWidth: "1000px", minWidth: "1000px" }}>
        <FileUploader submitHandler={setFile} />
        <input
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <input placeholder="File ID" value={fileId} onChange={(e) => setFileId(e.target.value)} />
        <button onClick={htmlProcessor}>Click to process</button>
        <button
          onClick={() => {
            storeDatainLocalStorage(fileJSONMemoized);
          }}
        >
          Store Data in LocalStorage
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear LocalStorage
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
    </div>
  );
};

export default CreateDocument;
