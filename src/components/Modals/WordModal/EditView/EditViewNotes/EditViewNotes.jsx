import React, { useState } from "react";
import "./EditViewNotes.scss";

const EditViewNotes = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const { notes } = currentData;

  const handleAddNote = () => {
    if(!currentString) return;
    const updatedMeanings = [...notes, currentString];
    setCurrentData({ ...currentData, notes: updatedMeanings });
    setCurrentString("");
  };

  const deleteNote = (meaniningIndex) => {
    const updatedMeanings = notes.filter((_, i) => i !== meaniningIndex);
    setCurrentData({ ...currentData, notes: updatedMeanings });
  };

  return (
    <div className="edit-view-notes">
      <div className="edit-view-notes-display">
        {notes.map((note, i) => {
          return (
            <div key={`${note}-${i}`} className="edit-view-notes-meaning">
              <button onClick={() => deleteNote(i)}>X</button>
              <span onClick={() => setCurrentString(note)}>{note}</span>
            </div>
          );
        })}
      </div>
      <div className="edit-view-notes-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          value={currentString}
        />
        <div className="edit-view-notes-input-buttons">
          <button
            className={`${!currentString ? "disabled" : ""}`}
            onClick={() => handleAddNote()}
          >
            O
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditViewNotes;
