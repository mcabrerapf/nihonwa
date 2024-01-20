import React from "react";
import "./WordModalNotes.css";

const WordModalNotes = ({ notes = [] }) => {
  return (
    <div className="word-notes">
      {notes.map((note, i) => {
        return (
          <div key={`${i}-${note}`} className="word-note">
            <span>- {note}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WordModalNotes;
