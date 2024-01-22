import React from "react";
import "./DisplayViewNotes.scss";
import { copyToClipboard } from "../../../../../utils";

const DisplayViewNotes = ({ notes = [] }) => {
  return (
    <div className="display-view-notes">
      {notes.map((note, i) => {
        return (
          <div
            key={`${i}-${note}`}
            className="display-view-note"
            onClick={() => copyToClipboard(note)}
          >
            <span>- {note}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayViewNotes;
