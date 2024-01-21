import React, { useState } from "react";
import "./EditNotes.scss";
import Button from "../../Button";

const EditNotes = ({ currentData, setCurrentData }) => {
  const [currentString, setCurrentString] = useState("");
  const { notes } = currentData;

  const handleAddNote = () => {
    if (!currentString) return;
    const updatedMeanings = [...notes, currentString];
    setCurrentData({ ...currentData, notes: updatedMeanings });
    setCurrentString("");
  };

  const deleteNote = (meaniningIndex) => {
    const updatedMeanings = notes.filter((_, i) => i !== meaniningIndex);
    setCurrentData({ ...currentData, notes: updatedMeanings });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddNote();
    }
  };

  return (
    <div className="edit-notes">
      <div className="edit-notes-display">
        {notes.map((note, i) => {
          return (
            <div key={`${note}-${i}`} className="edit-notes-meaning">
              <Button onClick={() => deleteNote(i)}>X</Button>
              <span onClick={() => setCurrentString(note)}>{note}</span>
            </div>
          );
        })}
      </div>
      <div className="edit-notes-input">
        <input
          onChange={(e) => setCurrentString(e.target.value)}
          onKeyDown={handleKeyPress}
          value={currentString}
        />
        <div className="edit-notes-input-buttons">
          <Button isDisabled={!currentString} onClick={() => handleAddNote()}>
            O
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditNotes;
