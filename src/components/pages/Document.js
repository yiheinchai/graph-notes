import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { objectExtractor } from "../../helpers/helpers";
import { preloadedNotes } from "../../store/preloadedNotes";
import styles from "./Document.module.css";

const Document = () => {
  const [notes, setNotes] = useState();
  const [mindMapMode, setMindMapMode] = useState();
  let params = useParams();

  useEffect(() => {
    const storedNotes = localStorage.getItem(params.documentId);
    if (!storedNotes && params.documentId) {
      setNotes(preloadedNotes[params.documentId]);
      localStorage.setItem(params.documentId, JSON.stringify(preloadedNotes[params.documentId]));
    } else {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  return <div className={styles.wrapper}>{notes && objectExtractor(notes, mindMapMode)}</div>;
};

export default Document;
