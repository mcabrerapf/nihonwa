import React from "react";
import "./WordModalNotes.scss";
import { copyToClipboard } from "../../../../../utils";

const WordModalNotes = ({ notes = [] }) => {
  return (
    <div className="word-notes">
      {notes.map((note, i) => {
        return (
          <div
            key={`${i}-${note}`}
            className="word-note"
            onClick={() => copyToClipboard(note)}
          >
            <span>- {note}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WordModalNotes;
