import { useState } from "react";
import ListText from "./components/ListText";
import "./App.css";
import FileUploader from "./components/FileUploader";
import Mindmap from "./components/mindmap/Mindmap";
import Document from "./components/document/Document";

const App = () => {
  // const [noteData, setNoteData] = useState(JSON.stringify(exampleObject2));
  const [mindMapMode, setMindMapMode] = useState(false);
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState();
  const [fileJSON, setFileJSON] = useState();

  // console.log("sample html", sampleHTML)

  // const updateNotes = (event) => {
  //   event.preventDefault();
  //   console.log("Notes updated!");
  //   setNoteData((previousObject) => {

  //   })
  // };

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
        if (current.localName === "p") {
          // try {
          //   current.removeFirstChild(current.querySelector("span"));
          // } catch {}
        }
        if (current.localName === "h1") {
          insertChildren(previous[1], {
            text: current.textContent,
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
            currentHierarchy = elementHierarchy[current.localName][current.style.marginLeft];
          } else {
            currentHierarchy = elementHierarchy[current.localName];
          }
          if (previous[0] === currentHierarchy) {
            insertSibilingInLatestAndDeepestDepths(previous[1], {
              text: current.textContent
                .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", ""),
              children: [],
            });
          } else if (previous[0] > currentHierarchy) {
            insertSibilingAtSpecifiedDepth(
              previous[1],
              {
                text: current.textContent
                  .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", "")
                  .replace("�", ""),
                children: [],
              },
              currentHierarchy
            );
          } else if (previous[0] < currentHierarchy) {
            insertChildInLatestAndDeepestDepths(previous[1], {
              text: current.textContent
                .replace(/[\x00-\x1F\x7F-\xFF]/g, "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", "")
                .replace("�", ""),
              children: [],
            });
          }
          return [currentHierarchy, previous[1]];
        }
        return previous;
      },
      [-1, { text: "Root", children: [] }]
    );

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
        return insertChildInLatestAndDeepestDepths(
          object.children[object.children.length - 1],
          data
        );
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

    setFileJSON(output[1]);
  };

  const processFile = () => {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setFileData(e.target.result);
    };
    fileReader.readAsText(file);
  };

  return (
    <div>
      <h3>Notes</h3>
      <FileUploader submitHandler={setFile} />
      <button onClick={htmlProcessor}>Click to process</button>
      <button onClick={() => setMindMapMode((previous) => !previous)}>Toggle Mindmap Mode</button>
      {file && processFile()}
      <div>{file && file.name}</div>
      {fileJSON && mindMapMode && <Mindmap fileJson={fileJSON} />}
      {fileJSON && !mindMapMode && <Document fileJson={fileJSON} />}
      <div
        id="uploadedDocument"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: fileData }}
      ></div>
    </div>
  );
};

export default App;
